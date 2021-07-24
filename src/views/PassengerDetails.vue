<template>
  <div v-if="passenger">
    <h1>{{ passenger.name }}</h1>
    <h4>{{ passenger.airline.name }}</h4>
    <h4 v-for="airline in passenger.airline" :key="airline.id">
      {{ airline.name }}
    </h4>
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
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
