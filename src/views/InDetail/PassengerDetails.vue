<template>
  <div v-if="passenger" class="Passenger">
    <p><b>Name:</b> {{ passenger.name }}</p>
    <p><b>ID:</b> {{ passenger._id }}</p>
    <p><b>Trips:</b> {{ passenger.trips }}</p>
    <span>
      <b> Airline: </b>
      <span>{{ passenger.airline.name }}</span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        {{ airline.name }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: ['passenger']
}
</script>

<style scoped>
.Passenger {
  text-align: start;
  margin-left: 10%;
}
</style>