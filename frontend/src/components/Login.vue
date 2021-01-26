<template>
  <div class="container">
      <div class="container-logo">
          <img src="../assets/icon-left-font-monochrome-white.png" alt="logo entreprise" width="200" >
      </div>
       <form class="form" id="login" @submit.prevent ="submitForm">
            <h1 class="form__title">Se connecter</h1>
            <div class="form__message form__message--error"></div>
            <div class="form__input-group">
                <input 
                class="form__input"
                type="text"                             
                v-model="userName" 
                id="username" 
                placeholder="Votre pseudo" 
                data-trigger="hover" 
                minlength="2" 
                maxlength="20" 
                required>
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input 
                type="password" 
                class="form__input" 
                id="password"               
                v-model="password"
                placeholder="Mot de passe"
               
                 
                required
                >
                
                <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" >Continue</button>
            
            <p class="form__text">
                <a href="#" class="form__link">Mot de passe oublié?</a>
            </p>
            <p class="form__text">
                <router-link :to="{name: 'Signup'}" >pas de compte? Creer un compte</router-link>
               
            </p>
        </form>
  </div>

</template>

<script>
import {  ref } from 'vue'
import { useRouter } from 'vue-router'


export default {
  components: {  },

    setup(){
        
        const error = ref(null)
        const userName = ref(null)
        const password = ref(null)
        let user = ref([])
        const router = useRouter()       
        const URL= 'http://localhost:3030/api/users/login'       
        
        const submitForm = async ()=>{
            const userLogin = {
                userName: userName.value,
                password: password.value
            }            
            try {              
                let data= await fetch(URL,{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(userLogin)
                })
                if (!data.ok)   {
                throw Error("mauvais nom d'utilisateur ou mauvais mot de passe")
                }   
                
                user.value = await data.json()
                localStorage.setItem('token', user.value.token)
                localStorage.setItem('user', user.value.userId)
                

                router.push( { name: 'MainVue'})

            } catch (err) {
                error.value = err.message
                console.log(error.value)
                
            }
    }   
    return {user,userName,password, error, submitForm}
    }

}

</script>

<style scoped>

body {
    margin: 0;    
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;    
    
}

h1{
    font-size: 18px;
}
#login{
    width: 60%;
    max-width: 400px;
    height: 270px;    
    margin: 4rem auto;
    padding: 2rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background: rgba(255,255,255,0.6)

}
.container {   
    width: 100%;  
    height: 100vh;
    
    background-image: url('../assets//ob_44860e_lac-blanc-110.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    
}
 .container-logo{
     padding-top: 2rem;
 }

.container,
.form__input,
.form__button {
    font: 500 0.8rem 'Quicksand', sans-serif;
}

.form--hidden {
    display: none;
}

.form > *:first-child {
    margin-top: 0;
}

.form > *:last-child {
    margin-bottom: 0;
}

.form__title {
    margin-bottom: 1rem;
    text-align: center;
}

.form__message {
    text-align: center;
    margin-bottom: 1rem;
}

.form__message--success {
    color: #4bb544;
}

.form__message--error {
    color: #cc3333;
}

.form__input-group {
    margin-bottom: 1rem;
}

.form__input {
    display: block;
    width: 100%;
    padding: 0.75rem;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #dddddd;
    outline: none;
    background: #eeeeee;
    transition: background 0.2s, border-color 0.2s;
}

.form__input:focus {
    border-color: #19177c;
    background: #ffffff;
}

.form__input--error {
    color: #cc3333;
    border-color: #cc3333;
}

.form__input-error-message {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color:#cc3333;
}

.form__button {
    width: 100%;
    padding: 1rem 2rem;
    font-weight: bold;
    font-size: 0.8rem;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: #19177c;
}

.form__button:hover {
    background:  #757eaf;
}

.form__button:active {
    transform: scale(0.98);
}

.form__text {
    text-align: center;
}

.form__link {
    color: #252c6a;
    text-decoration: none;
    cursor: pointer;
}

.form__link:hover {
    text-decoration: underline;
}

a{
    text-decoration: none;
}


</style>