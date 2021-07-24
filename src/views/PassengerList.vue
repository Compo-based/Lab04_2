<template>
  <div class="events">
    <PassengerCard
      v-for="passenger in passengers"
      :key="passenger._id"
      :passenger="passenger"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PassengerCard from '@/components/PassengerCard.vue'
import EventService from '@/services/EventService.js'
import { watchEffect } from '@vue/runtime-core'

export default {
  name: 'PassengerList',
  components: {
    PassengerCard
  },
  data() {
    return {
      passengers: null
      /* totalEvents: 0 */
    }
  },
  created() {
    watchEffect(() => {
      EventService.getEvents(0, 10)
        .then((response) => {
          this.passengers = response.data.data
          /*  this.totalEvents = response.headers['x-total-count'] */
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  border: 1px solid black;
  text-align: left;
}
#page-next {
  border: 1px solid black;
  text-align: right;
}
</style>