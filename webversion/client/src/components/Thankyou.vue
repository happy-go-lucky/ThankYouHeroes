/* global google */
<template>
  <div class="thankyou">
    <section class="hero is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <router-link class="navbar-item button is-white" to="/" tag="button">THANK YOU HEROES </router-link>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="columns">
          <div class="column is-one-third">
            <form @submit.prevent="handleSubmit">
            <label class="label" for="dayOfEvent">Time of event</label>
            <!-- TODO: set up it to be current date -->
            <input class="input" type="date" name="dayOfEvent" v-model="tmsg.eventDate">
            <br>
            <label class="label">
              Location
            </label>
            <br>
              <gmap-autocomplete class="input"
                @place_changed="setPlace" id="gmap">
              </gmap-autocomplete>
              <br>
              <button class="button" @click="setMarker">Search</button>
            <br/>
            <label class="label" for="msg">Message</label>
            <br>
            <textarea class="textarea" rows="10" cols="50" maxlength="200" placeholder="please enter your thank you message, max 200 characters" v-model="tmsg.comments">
            </textarea>
            <br>
            <button class="button" type="submit">Submit</button>
          </form>
          </div>
          <div class="column">
           <gmap-map
            :center="center"
            :zoom="12"
            style="width:100%;  height: 400px;"
           >
           <gmap-marker
             :position="this.center"
           ></gmap-marker>
           </gmap-map>
          </div>
         </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot is-danger has-text-centered">
        <p> &copy; Lumohacks 2018 </p>
      </div>
    </section>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'thankyou',
  data () {
    return {
      tmsg: {
        employeeUserid: '',
        location: {
          latitude: 0,
          longitude: 0
        },
        eventDate: '2018-09-16',
        comments: '',
        serviceIconCode: 0,
        emoticonCode: 0
      },
      center: {
        lat: 45.508,
        lng: -73.587
      },
      currentPlace: null
    }
  },
  mounted () {
    // this.getPosts()
    this.geolocate()
  },
  methods: {
    async handleSubmit () {
      this.tmsg.location.latitude = this.center.lat
      this.tmsg.location.longitude = this.center.lng
      console.log(this.tmsg)
      const response = await PostsService.methods.sendThankYouMessage(this.tmsg)
      console.log('submitted successfully' + response)
    },
    setPlace (place) {
      this.currentPlace = place
    },
    setMarker () {
      this.center = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng()
      }
    },
    geolocate () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}
</script>

<style scoped>
  /* Always set the map height explicitly to define the size of the div
   * element that contains the map. */
  #map {
    height: 100%;
  }
  #gmap {
    width: 100%;
  }
  /* Optional: Makes the sample page fill the window. */
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
