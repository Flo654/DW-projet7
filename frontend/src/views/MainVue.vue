<template>
  <header>
    <Navbar/>
  </header>
    <main role="main">
      <section class="messages">
        <CreateMessage :userInfos="userInfos"  />
      
        <div v-if="error">{{error}}</div>
        <div v-if="posts.length">
          <PostsVue  :posts="posts" :userInfos="userInfos"/> 
        </div>
        <div v-else>
          <Spinner/>
        </div>
      </section>
      <aside class="informations">
        <section class="events">
          <Events/>

        </section>
        <section class="opportunity">
          <JobsOpportunities/>

        </section>
        <section class="about">
          <About/>
          
        </section>
      </aside>

    </main>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Spinner from '../components/Spinner.vue'
import PostsVue from '../views/PostsVue.vue'
import CreateMessage from '../components/CreateMessage.vue'
import Events from '../components/Events.vue'
import About from '../components/About.vue'
import JobsOpportunities from '../components/JobsOpportunities.vue'
import { ref } from 'vue'
export default {
  components: { Navbar, PostsVue, Spinner,CreateMessage, Events, About,JobsOpportunities },
  setup(){
    
    const posts = ref([])
    const error = ref('') 
    const userInfos = ref([])  

    const load = async ()=>{
      try {
        
        const url = 'http://localhost:3030/api/messages/'
        let data= await fetch(url,{
            method: 'GET',
            headers: {
              'Authorization': "Bearer " +  sessionStorage.getItem("token")
            }       
                })
        if (!data.ok)   {
          throw Error('no data available')
        }   
        posts.value = await data.json()
        ;
      
      } catch (err) {
        error.value = err.message
       
        
      }
    }   
    load()
     const getUser = async ()=>{
            try {
                const userid = sessionStorage.getItem("user")
                const res= await fetch('http://localhost:3030/api/users/' + userid, {
                    headers: {
                        Authorization: "Bearer " +  sessionStorage.getItem("token")
                    }
                })
                if (!res.ok)   {
                throw Error('that user is not exists !!')
                return res
                } 
                const data = await res.json()
                
                userInfos.value = {
                    userName : data.searchUser.userName,
                    email : data.searchUser.email,
                    id : data.searchUser.id,
                    isAdmin : data.searchUser.isAdmin

                }               
                
            } catch (err) {
                error.value = err.message
                console.log(error.value)            
            }
        }
        getUser()
        
    return{ posts, error, load, userInfos}    

  }  

}
</script>

<style >

main{
  display: block;
  margin-top: 2rem;

}
aside.informations{
  
  width:100%;
  background:white

}
section.messages{
  padding: 0.5rem 0;

  width: 100%;
  min-width: 300px;
  background: white;


}

@media screen and (min-width: 900px) {
  main {
    display: flex;

  }
  section.messages{
    width:85%;
  }
  aside.informations{
  
  width:40%;
  background:white

}
}
</style>