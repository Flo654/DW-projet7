<template>
  <div v-for="user in users" :key='user.id'>
      <SingleUser :user="user"/>      
  </div>
</template>

<script>
import SingleUser from '../components/SingleUser'
export default {
  components: { SingleUser },
    props :['users'],

}
</script>

<style>

</style>