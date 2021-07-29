<template>
  <div v-if="passenger">
    <p>Edit the user data here</p>
    <button @click="edit">Edit Me</button>
  </div>
</template>

<script>
export default {
  props: ['passenger'],
  inject: ['GStore'],
  methods: {
    edit() {
      this.GStore.flashEdit = 'Stating that the update is in progress'
      setTimeout(() => {
        this.GStore.flashEdit = ''
      }, 5000)
      this.$router.push({
        name: 'AllPassenger',
        params: { id: this.passenger.id }
      })
    }
  }
}
</script>

<style scoped>
.Passenger {
  text-align: start;
  margin-left: 10%;
}
</style>