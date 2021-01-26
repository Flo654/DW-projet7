<template>
  <form @submit.prevent="handleSubmit">
    <input  id="username" type="text" pattern="^[a-zA-Z]{3,16}[0-9]{0,4}$" required placeholder="Nom d'utilisateur" aria-label="username" v-model="userName">
    <input  id="email" type="email" required placeholder="Email" aria-label="email" v-model="email">
    <input id="password" type="password" required pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$" aria-label="password" placeholder="Mot de passe" v-model="password">
    <div class="error">{{error}}</div>
    <button @click="verifications" >Envoyer</button>
  </form>
  <vue-final-modal  v-model="isOk" name="example">
     <div class="confirm">
        <div class="confirm__window">
            <div class="confirm__titlebar">
                <span class="confirm__title">Félicitation</span>
                
            </div>
            <div class="confirm__content">Votre compte à été creé <br> vous pouvez maintenant vous connecter !!
            </div>
            <div class="confirm__buttons">
                <button @click="directed" class="confirm__button confirm__button--ok confirm__button--fill">Ok</button>
                
            </div>


        </div>

        
    </div>
  </vue-final-modal>
  
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup(props, context) {      
    // refs
    const userName = ref('')
    const email = ref('')
    const password = ref('')
     const theUser = ref([])
    const error = ref(null)
    const isOk = ref(false)

    const router = useRouter()
    
    const verifications = ()=>{
      
      const inputPassword = document.getElementById("password")
      const inputUsername = document.getElementById('username')
    
      if(inputPassword.validity.patternMismatch){
      console.log('pasok');
      //inputPassword.setCustomValidity('pas Ok')
      error.value = 'le mot de passe valide doit avoir de 8 à 15 caractères, au moins une lettre minuscule, au moins une lettre majuscule, au moins un chiffre, au moins un de ces caractères spéciaux: $ @ % * + - _ !'
      }
      if(inputUsername.validity.patternMismatch){
      console.log('pasok');
      //inputPassword.setCustomValidity('pas Ok')
      error.value = 'Le pseudo doit commencer par 3 lettres au minimum et comporter 20 caracteres max, pas de caractères spéciaux'
      }
    }
    
    
    const handleSubmit = async() => {
      isOk.value=!isOk.value
      error.value = null           
      const url = 'http://localhost:3030/api/users/signup'

      const newUser = {
          userName: userName.value,
          email: email.value,
          password: password.value
      }  

      try {
          const res = await fetch(url,{
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(newUser)
          }) 
          const errorResponse  = await res.json()
          if (!res.ok)   {
              error.value = errorResponse.message
              return 
          } 
          error.value = null
            console.log('utilisateur enregistré');
            context.emit('signup')            
      } 
      catch (err) {
          console.log(err.message)
          error.value = err.message           
      }     
    }

    const directed = ()=>{
      isOk.value = !isOk.value
      history.go(0)

    }
    return { error, userName, email, password,verifications, handleSubmit, isOk, directed }
  }
}
</script>

<style scoped>
  body{
    margin: 0
}

.confirm{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    padding: 10px;
    box-sizing: border-box;
    opacity: 0;
    animation-name: confirm---open;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    display: flex;
    align-items: center;
    justify-content: center;

}
.confirm--close{
    animation-name: confirm---close;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
}

.confirm__window{
    width: 100%;
    max-width: 300px;
    background: white;
    font-size: 14px;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);

    opacity:0 ;
    transform: scale(0.75);
    animation-name: confirm__window---open;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;

}    
.confirm__titlebar,
.confirm__content {
    padding: 1.25rem;
}
.confirm__titlebar{
    background: #2326b8;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.confirm__title{
    font-weight: bold;
    text-decoration: none;
    

}



.confirm__content{
    line-height: 1.1rem;
    font-weight: bold;
}


.confirm__buttons{
    background: #eeeeee;
    display: flex;
    
}

.confirm__button{
  margin-left: 230px;
    padding: 0.4rem 0.8rem;
    border: 2px solid #3c7bf0;
    border-radius: 5px;
    background: white;
    color: #2326b8;
    font-weight: bold;
    
    font-family: sans-serif;
    
    cursor: pointer;
    outline: none;

}

.confirm__button--fill{
    background: #2326b8;
    color: white;
}













@keyframes confirm---open{
    from { opacity: 0;}
    to { opacity: 1;}
}
@keyframes confirm---close{
    from { opacity: 1;}
    to { opacity: 0;}
}
@keyframes confirm__window---open {
    to {
        opacity: 1;
        transform: scale(1);
    }
  
}
</style>>
