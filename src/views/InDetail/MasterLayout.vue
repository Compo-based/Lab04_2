<template>
  <div v-if="GStore.passenger">
    <div id="nav">
      <router-link :to="{ name: 'PassengerDetails' }"> Details </router-link>
      |
      <router-link :to="{ name: 'AirlineDetails' }">
        Airline details
      </router-link>
      |
      <router-link :to="{ name: 'EditDetails' }"> Edit </router-link>
    </div>
    <router-view :passenger="GStore.passenger" />
  </div>
</template>

<script>
export default {
  inject: ['GStore']
}
</script>
