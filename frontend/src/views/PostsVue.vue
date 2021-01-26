<template>
 
  <section>
    <div v-for="post in posts" :key="post.id">
         <SinglePost  :post="post" :userInfos="userInfos"/>
    </div>
    
  </section>
</template>

<script>

import SinglePost from '../components/SinglePost.vue'

export default {
  components: { SinglePost},
  props:['posts','userInfos'],
    setup()
{
    
}


}
</script>

<style>

</style>