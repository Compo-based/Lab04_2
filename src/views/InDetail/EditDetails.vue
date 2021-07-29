<template>
  <p>Edit the user data here</p>
  <button @click="edit">Edit Me</button>
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