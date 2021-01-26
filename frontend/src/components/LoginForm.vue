<template>
  <form @submit.prevent="handleSubmit" role="connection">
    <input type="text" required placeholder="Nom d'utilisateur" v-model="userName" aria-label="username">
    <input type="password" required placeholder="password" v-model="password" aria-label="password">
    <div class="error">{{error}}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props, context) {      
    // refs
    const userName = ref('')
    const password = ref('')
    const userDataConnection = ref([])
    const error = ref('')
    
    const handleSubmit = async() => {
            
        const url = 'http://localhost:3030/api/users/login'
        const user = {
            userName: userName.value,            
            password: password.value
        }   

        try {
            const response = await fetch(url,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            })
            const errorResponse  = await response.json()
            
            
            if (!response.ok)   {
                
                error.value = errorResponse.message
                return }
                             
            console.log('utilisateur connecté');
            error.value = null
            userDataConnection.value = errorResponse
            
            sessionStorage.setItem('token', userDataConnection.value.token)
            sessionStorage.setItem('user', userDataConnection.value.userId)
            context.emit('login')
            
        } 
        catch (err) {
            console.log(err);
           
            
        }
      
    }
    return { error, userName, password, handleSubmit, userDataConnection }
  }
}
</script>

<style >

</style>