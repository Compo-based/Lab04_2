<template>
  <div v-if="passenger">
    <div id="nav">
      <router-link :to="{ name: 'PassengerDetails', params: { id } }">
        Details
      </router-link>
      |
      <router-link :to="{ name: 'AirlineDetails', params: { id } }">
        Airline details
      </router-link>
      |
      <router-link :to="{ name: 'EditDetails', params: { id } }">
        Edit
      </router-link>
    </div>
    <router-view :passenger="passenger" />
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      passenger: null
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.passenger = response.data
        if (response && response.status == 204) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'passenger' }
          })
        }
      })
      .catch((error) => {
        console.log(error)
        if (error.response && error.response.status != 204) {
          this.$router.push({ name: 'NetworkError' })
        }
      })
  }
}
</script>
