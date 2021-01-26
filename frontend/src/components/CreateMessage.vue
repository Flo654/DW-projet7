<template>

    <div class="message-wrapper">      
        <div class="mdi mdi-account-circle" ></div>  
            
            <input type="text" aria-label="message" @click="showModal = true" class="message-wrapper-input"   placeholder="Ecrivez un message...">
               
  </div>
  <div > 
   <vue-final-modal  v-model="showModal" name="example">
        <div class="backdrop" >
                <div class="modal" >
                    <form @submit.prevent="postMessage" class="create-message-card">
                        <div class="create-message-card-header">
                            <div class="create-message-card-header__content">
                                <router-link :to="{name: 'MainVue'}" role="presentation" aria-label="aaaa">
                                    <div @click="showModal = false" class="header-content-logo mdi mdi-arrow-left" role="presentation"></div>
                                </router-link>
                        
                                <h1 class="header-content-message">Creer une publication</h1>
                            </div>
                            <button  class="create-message-card-header__button ">Publier</button>
                        </div>
                        <div class="create-message-card__user-infos">
                            <div class="message-card-header__user-logo mdi mdi-account-circle"></div>
                            <div class="message-card-header__user-name">{{userInfos.userName}}</div>
                        </div>
                        <div class="create-message-card-content">
                            <textarea cols="32" aria-label="message" rows="10" v-model="message" placeholder="Ecrivez votre message ici ...." ></textarea>
                        </div>


                    </form>
                    
                </div>
            </div>  
    </vue-final-modal>
  </div>
  
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    props:['userInfos'],

    setup(props) {
        const showModal = ref(false)
        const message = ref('')
        const router = useRouter()

        const postMessage = async()=>{
            
            if(!message.value){
                console.log('message vide', props.userInfos.id)
            return}
            try {
                const url ='http://localhost:3030/api/messages/post'
                const messageToSend = {
                    content: message.value,
                    attachment: null,
                    likes: 0

                }
                const response = await fetch(url,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " +  sessionStorage.getItem("token") 
                    },
                    body: JSON.stringify(messageToSend)
            })
            history.go(0)


                
            } catch (error) {
                console.log('erreur');
                
            }
            
            

        }

      
        

      
      
      return{showModal, message, postMessage}
    }

}
</script>

<style>
    .message-wrapper{
        background: rgb(245, 243, 243);       
        display: flex;
        margin: 0 auto;
        margin-bottom: 1rem;
        padding : 0.5rem 0;  
        padding-left: 1rem;
             
        
        width: 90%;
        align-items: center;
        box-sizing: border-box;
        border-radius: 5px;
        
    }

    .mdi{
        font-size: 25px;
        color: rgb(165, 158, 158);
        
    }
    .mdi-account-circle{
        font-size: 35px;
        color: rgb(165, 158, 158);
    }

    .message-wrapper-input{
        border-radius: 30px;
        border: solid 0.8px #19177c;
        cursor: pointer;
        padding: 0.5rem;
        padding-right: 2.4rem;

        
    }
    .create-message-card{
    padding:0 0.5rem;
    background: white;
    margin-bottom: 1rem;
}
.create-message-card-header{
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    align-items: center;
    justify-content: space-between
}
.create-message-card-header__content{
    display: flex;
    align-items: center;
}

.header-content-message{
    padding-left: 0.5rem;
    font-size: 1.2rem;
}

button{
    border: none;
    padding: 0.4rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    color:lightgray
}

.is-active{
    background: #19177c;
    color:white
}

.create-message-card__user-infos{
    display: flex;
    align-items: center;
    border-top: solid 0.2px lightgray;
}



textarea{
    resize: none;
    height:100vh;
    border: none;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;

}
textarea:focus{
    
    outline: none;
}

.header-content-logo:hover{
    background: lightgray;
    border-radius: 20%;
    
}
button:focus{
    cursor: pointer;
    outline: none;
}

</style>