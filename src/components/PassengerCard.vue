<template>
  <router-link
    class="event-link"
    :to="{ name: 'PassengerDetails', params: { id: passenger._id } }"
  >
    <div class="event-card">
      <p><b>Name:</b> {{ passenger.name }}</p>
      <p><b>ID:</b> {{ passenger._id }}</p>
      <span>
        <b> Airline: </b>
        <span>{{ passenger.airline.name }}</span>
        <span v-for="airline in passenger.airline" :key="airline.id">
          {{ airline.name }}
        </span>
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PassengerCard',
  props: {
    passenger: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 400px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
