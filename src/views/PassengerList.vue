<template>
  <div class="events">
    <PassengerCard
      v-for="passenger in passengers"
      :key="passenger._id"
      :passenger="passenger"
    />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'AllPassenger', query: { page: page - 1, size } }"
        rel="prev"
        v-if="page != 0"
      >
        Prev Page
      </router-link>

      <router-link
        id="page-next"
        :to="{ name: 'AllPassenger', query: { page: page + 1, size } }"
        rel="next"
      >
        Next Page
      </router-link>
    </div>
    <br />
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{
          name: 'AllPassenger',
          query: { page, size: size - 1 }
        }"
        v-if="size != 1"
      >
        Remove card
      </router-link>

      <router-link
        id="page-next"
        :to="{
          name: 'AllPassenger',
          query: { page, size: size + 1 }
        }"
      >
        Insert card
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PassengerCard from '@/components/PassengerCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'PassengerList',
  props: {
    page: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },
  components: {
    PassengerCard
  },
  data() {
    return {
      passengers: null,
      totalEvents: 0
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getEvents(
      parseInt(routeTo.query.page) || 0,
      parseInt(routeTo.query.size) || 10
    )
      .then((response) => {
        next((comp) => {
          comp.passengers = response.data.data
          comp.totalEvents = response.headers['x-total-count'] // <--- Store it
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    EventService.getEvents(
      parseInt(routeTo.query.page) || 0,
      parseInt(routeTo.query.size) || 10
    )
      .then((response) => {
        this.passengers = response.data.data
        this.totalEvents = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
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