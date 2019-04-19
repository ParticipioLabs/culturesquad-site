<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <p><strong>Time:</strong> {{ parsedTime }}</p>
        <div v-html="eventContent" />
      </div>
    </div>
  </div>
</template>

<script>
  import {extractParseTimeFromEventContentHtml} from '../../modules/utils'

  export default {
    props: {
      event: {
        type: Object,
        default: function () {
          return {};
        }
      }
    },
    computed: {
      parsedTime () {
        return extractParseTimeFromEventContentHtml(this.event.cooked)
      },
      // Without time part (it is parsed above and rendered separately, so we remove it from event content)
      eventContent () {
        let parts = this.event.cooked.split('\n');
        const [time, ...rest] = parts;

        return rest.join('');
      }
    }
  }
</script>

<style scoped>

</style>
