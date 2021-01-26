<template>
<NavBar :usert="usert" />
 
 
 <MessageList/>
 
</template>

<script>
import MessageList from '../components/MessageList.vue'
import NavBar from '../components/NavBar.vue'
import { ref } from 'vue'



export default {
  components: { MessageList, NavBar},
  setup(){
    const error = ref(null)
    let usert = ref(null)
    const userid = localStorage.getItem("user")
    
      
    const load = async ()=>{
      try {
          
        let data= await fetch('http://localhost:3030/api/users/' + userid,  {
        headers: {
            Authorization: "Bearer " + localStorage.token
        }
        })
        if (!data.ok)   {
          throw Error('that user is not exists !!')
        }   
        
        const use= await data.json()
        usert = use.searchUser.id
        console.log(usert);

      } catch (err) {
        error.value = err.message
        console.log(error.value)
        
      }
    }  
    load()
    return{error, usert, load}

  }
   

}
</script>

<style>


</style>
  
  
