<template>
  <div class="container p-4">
    <div class="row">
      <div class="col">
        <gmap-map
          :center="getCoordinatesCenter(markers)"
          :zoom="4"
          map-type-id="terrain"
          style="width: 100%; height: 25rem"
        >
          <gmap-marker
            v-for="(m, index) in markers"
            :key="index"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="toggleInfoWindow(m,index)"
          />

          <gmap-info-window
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen=false"
          >
            <div v-html="infoContent"/>
          </gmap-info-window>
        </gmap-map>
      </div>
    </div>
  </div>
</template>
<script>
  import geolib from 'geolib'

  export default {
    data() {
      return {
        markers: process.env.mapNodes,
        infoContent: '',
        infoWindowPos: {
          lat: 0,
          lng: 0
        },
        infoWinOpen: false,
        currentMidx: null,
        //optional: offset infowindow so it visually sits nicely on top of our marker
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        }
      }
    },
    methods: {
      getCoordinatesCenter() {
        let center = geolib.getCenter(this.prepareCoordinatesForGeolib(this.markers));
        return {
          lat: Number(center.latitude),
          lng: Number(center.longitude)
        };
      },
      prepareCoordinatesForGeolib(markersArray) {
        let final = [];
        markersArray.forEach(function (m) {
          final.push(m.position)
        });

        return final;
      },
      toggleInfoWindow: function (marker, idx) {
        this.infoWindowPos = marker.position;
        this.infoContent = this.getInfoWindowContent(marker);

        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx === idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      },
      getInfoWindowContent: function (marker) {
        return (
          `<div class="card"><h5>${marker.name}</h5></div>`
        );
      }
    }
  }
</script>

<style scoped>

</style>
