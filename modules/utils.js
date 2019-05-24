import moment from 'moment'

// Remove [] or [some text] tags at the beginning of string / HTML
export const removeBeginningSquareBracketsTag = (text) => {
  if (text == null || !text.startsWith("["))
    return text;

  if (text.indexOf(']') < 0)
    // No closing bracket.
    return text;

  return text.substring(text.indexOf(']') + 1).trim();
};


// Remove [] or [some text] tags at any position in string / HTML
export const removeSquareBracketsTag = (text) => {
  return text.replace(/ *\[[^\]]*]/g, '');
};

// Remove HTML tags
export const removeHTMLTags = (text) => {
  return text.replace(/<(?:.|\n)*?>/gm, '');
};


// Truncate long text to desired number of chars and end it with desired ellipsis
export const truncate = (text, length, suffix) => {
  return text.substring(0, length) + suffix;
};


// Parse events from discourse API

// parseExcerptKey is varying (on some objects it is literally 'excerpt' and on some 'cooked'

// Event object's excerpt value contains time, location and content separated by '\n' (new line endings)

// Example of excerpt:

// "2019-05-22T08:00:00Z → 2019-05-22T16:00:00Z \n <a class=\"lightbox\" href=\"https://edgeryders.eu/uploads/default/original/2X/a/af9c7796e393f056493b43f97b94a4d37c9b995a.jpeg\" data-download-href=\"https://edgeryders.eu/uploads/default/af9c7796e393f056493b43f97b94a4d37c9b995a\" title=\"Wine-Event-Placeholder.jpg\">[Wine-Event-Placeholder]</a>\nLocation: <a href=\"https://www.deliriumvillage.com/bar/delirium-cafe/\" rel=\"nofollow noopener\">Delirium Café</a>, Impasse de la Fidélité 4, Brussels \nThis is the first example of and event. You can assume that the first row line is a en event in markdown format, followed by the location and description. \nLorem ipsum. Nympharum molire petendum susurro exire, est magis: prohibebant timor <a href=\"http://aitnubibus.com/et\" rel=\"nofollow noopener\">iam viderat sed</a> aquas Avernales flectitur manet; colla. Et ex tecum nec inquit freta; molimina omnis ramis."

// STEPS:

// 1) excerpt is splitted by '\n'

// 2) first part is time '2019-05-22T08:00:00Z → 2019-05-22T16:00:00Z'

// 3) second part is location redundant part, thus it is ignored '<a class=\"lightbox\" href=\"https://edgeryders.eu/uploads/default/original/2X/a/af9c7796e393f056493b43f97b94a4d37c9b995a.jpeg\" data-download-href=\"https://edgeryders.eu/uploads/default/af9c7796e393f056493b43f97b94a4d37c9b995a\" title=\"Wine-Event-Placeholder.jpg\">[Wine-Event-Placeholder]</a>'

// 4) third part is location useful part 'Location: <a href=\"https://www.deliriumvillage.com/bar/delirium-cafe/\" rel=\"nofollow noopener\">Delirium Café</a>, Impasse de la Fidélité 4, Brussels'

// 5) the rest are content parts (...rest), thus they're joined into one string bellow

export const parseEvents = (events, parseExcerptKey) => {
  if(!Array.isArray(events))
    return [];

  let final = [];

  events.forEach(function (e) {
    const parts = e[parseExcerptKey].split("\n");
    const [time, location_part_redundant, location_part_main, ...rest] = parts;

    final.push({
      id: e.id,
      title: e.title,
      slug: e.slug,
      time: parseTimePart(time),
      eventStartDate: extractStartEndDate(time).startDate,
      eventEndDate: extractStartEndDate(time).endDate,
      location: boldDesiredWordInHtml(location_part_main, 'Location:'),
      content: rest.join(''),
      image: e.image_url
    });
  });

  return final;
};

// Function that parses & formats timePart from string above
// As mentioned above, time part is in format '2019-05-22T08:00:00Z → 2019-05-22T16:00:00Z'
// Moment will be used to format dates
export const parseTimePart = (timeString) => {
  const parts = timeString.split(" ");
  let [startDate, arrow, endDate] = parts;

  startDate = moment(startDate).format('lll');
  endDate = moment(endDate).format('lll');

  return startDate + ' ' + arrow + ' ' + endDate;
};


// Function that extracts startDate and endDate from timeString '2019-05-22T08:00:00Z → 2019-05-22T16:00:00Z'
// It will take first part '2019-05-22T08:00:00Z' and return startDate that is moment object created from this string
// It will take second part '2019-05-22T16:00:00Z' and return endDate that is moment object created from this string
export const extractStartEndDate = (timeString) => {
  const parts = timeString.split(" ");
  let [startDate, arrow, endDate] = parts;

  return {
    startDate: moment(startDate),
    endDate: moment(endDate)
  };
};


// Function that extracts and parses time data from event object's content HTML string ('cooked' key on single event object)
// Event's object excerpt key (in this case 'cooked' key contains HTML string that contains time tag
// Time data is located in span tags that have 'data-email-preview' attribute
// We will extract these values with regex below
// Example of HTML string part:

// "<p><span data-date="2019-05-10" data-time="19:00:00" class="discourse-local-date" data-timezones="Europe/Brussels" data-timezone="Europe/Berlin" data-email-preview="2019-05-10T17:00:00Z UTC">2019-05-10T17:00:00Z</span> → <span data-date="2019-05-10" data-time="22:00:00" class="discourse-local-date" data-timezones="Europe/Brussels" data-timezone="Europe/Berlin" data-email-preview="2019-05-10T20:00:00Z UTC">2019-05-10T20:00:00Z</span>

// After matching with regex, we will have two values extracted '2019-05-10T17:00:00Z UTC' and '2019-05-10T20:00:00Z UTC'
// Then we will take time part before whitespace and 'UTC' and format final string
// The first one is start time and second one is end time
export const extractParseTimeFromEventContentHtml = (eventContentHTML) => {
  let matched = eventContentHTML.match(/data-email-preview=\"([^\\"]*)/g);
  matched = matched.map(m => m.split("\"")[1]);
  return moment(matched[0].split(" ")[0]).format('lll') + ' → ' + moment(matched[1].split(" ")[0]).format('lll');
};


// Wrap desired text in HTML with <strong> element (bold)
export const boldDesiredWordInHtml = (text, desiredWord) => {
  return text.replace(desiredWord, `<strong>${desiredWord}</strong>`);
};


// Get latest element from array by date
// dateKey is varying, somewhere 'created_at' is used and somewhere 'updated_at'
export const getLatestByDate = (array, dateKey) => {
  if (array.length) {
    return array.reduce(function (r, a) {
      return r[dateKey] > a[dateKey] ? r : a;
    });
  } else {
    return [];
  }
};


// Sort array of objects by date
// You can pass date key and sort direction (asc, desc)
export const sortByDate = (array, dateKey, sortOrder) => {
  if (array.length) {
    switch (sortOrder) {
      case 'desc':
        array.sort((a,b) => moment(b[dateKey]) - moment(a[dateKey]));
        break;
      case 'asc':
        array.sort((a,b) => moment(a[dateKey]) - moment(b[dateKey]));
        break;
      default:
        array.sort((a,b) => moment(a[dateKey]) - moment(b[dateKey]));
    }

    return array;
  } else {
    return [];
  }
};


// Apply moment format
// Consult (https://momentjs.com/docs/#/parsing/string-format/) for various formats
export const formatDate = (date, formatString) => {
  return moment(date).format(formatString);
};


// Parse error object
// Prepare response for Nuxt error page
// Nuxt error page requires response in format { statusCode: status, message: message }
export const parseError = (err) => {
  // Return error if it's not a response error.
  if (!err.response) {
    // Catch common non-response errors.
    if (!err.status && err.message === 'Network Error') {
      return { statusCode: 500, message: 'There was a problem with the internet connection.' };
    }

    return { statusCode: err.status, message: err.message };
  }

  // Parse response error
  if (err.response) {
    let status = err.response.data && err.response.data.status ? err.response.data.status : err.status;
    let statusText = err.response.data && err.response.data.statusText ? err.response.data.statusText : err.statusText;
    let message = null;

    if (err.response.data && err.response.data.data){
      switch(typeof err.response.data.data) {
        case 'string':
          message = err.response.data.data;
          break;
        case 'object':
          message = err.response.data.data.errors ? err.response.data.data.errors : statusText;
          break;
        default:
        message = statusText;
      }
    } else {
      message = statusText;
    }

    return { statusCode: status, message: message };
  }
};
