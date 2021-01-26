<template>
   <div class="message-card">
        <div class="message-card-header">
            <div class="message-card-header__user">
                <div class="message-card-header__user-logo mdi mdi-account-circle"></div>
                <div class="message-card-header__user-name">{{post.User.Username}}</div>
            </div>
            <div class="message-card-header__options mdi mdi-dots-vertical" @click="showModal = true"></div>
        </div>
        <div class="message-card-body">
            <p class="message-card-body__content">{{post.content}}</p>
        </div>
        <div class="message-card-footer">
            <p class="message-card-footer__date"> crée le {{post.updatedAt.slice(0,10)}} à {{post.updatedAt.slice(11, 19)}}</p>
        
        </div>
        
        <vue-final-modal v-model="showModal" name="example" class="aze">
            <div class="backdrop" >
                <div class="modalHeader">
                            Que voulez vous faire ?
                </div>
                <div class="modal" >
                    <div  v-if="post.User.Username === userInfos.userName" class="modal-content">
                        
                        <div class="modal__icon-modify-message mdi mdi-pen"></div>
                        <!-- <router-link :to="{name: 'Modify'}"> -->
                            <div class="modal-content-text" @click="showModal3 = true" >Modifier ce message</div> 
                        <!-- </router-link> -->
                                    
                    </div>
                    <div  v-if="(post.User.Username === userInfos.userName) || userInfos.isAdmin" class="modal-content">
                        <div class="modal__icon-delete-message mdi mdi-delete"></div>
                        <div class="modal-content-text" @click="deleteMessage">Supprimer ce message</div> 
                    </div>  
                    <div class="modal-content">
                        <div class="modal__icon-delete-message mdi mdi-comment-text"></div>
                        <div class="modal-content-text">Commenter<span class="to-develop"> (à developper)</span></div> 
                    </div>            
                </div>
            </div>  
        </vue-final-modal>
        <vue-final-modal  v-model="showModal3" name="example">
        <div class="backdrop" >
                <div class="modal" >
                    <form @submit.prevent="modifyMessage" class="create-message-card">
                        <div class="create-message-card-header">
                            <div class="create-message-card-header__content">
                                
                                    <div @click="showModal3 = false;showModal = false" class="header-content-logo mdi mdi-arrow-left" alt="retour"></div>
                                
                        
                                <p class="header-content-message">Modifier la publication</p>
                            </div>
                            <button  class="create-message-card-header__button ">Modifier</button>
                        </div>
                        <div class="create-message-card__user-infos">
                            <div class="message-card-header__user-logo mdi mdi-account-circle"></div>
                            <div class="message-card-header__user-name">{{userInfos.userName}}</div>
                        </div>
                        <div class="create-message-card-content">
                            <textarea cols="32" rows="10" aria-label="message" v-model="message" placeholder="Ecrivez votre message ici ...." ></textarea>
                        </div>


                    </form>
                    
                </div>
            </div>  
    </vue-final-modal>
    </div>        
    
</template>

<script>
import { ref } from 'vue'

export default {
    props :['post', 'userInfos'],
    setup(props){
        
        const username = ref(props.userInfos.userName)
        const showModal = ref(false)
        const showModal3 = ref(false)
        const messageId= ref(props.post.id).value
        const message = ref(props.post.content)
        
        

        const deleteMessage = async()=>{
            const uri = 'http://localhost:3030/api/messages/delete/' + messageId
            
            try {
                const res = await fetch(uri,{
                    method: 'DELETE',
                    headers: {
                        'Authorization': "Bearer " + sessionStorage.getItem("token")
                    },
                    body: null         
                })
             if (!res.ok)   {
                throw Error('oups')
                return res}
                console.log('message suprimé')
                history.go(0)
            
            } catch (error) {
                console.log(error);
                
            }            
        }

        const modifyMessage = async()=>{
            
            const uri = 'http://localhost:3030/api/messages/update/' + messageId
            const newMessage = {
                content: message.value
            }
            
            try {
                console.log(newMessage.content);
                const res = await fetch(uri,{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + sessionStorage.token
                    },
                    body: JSON.stringify(newMessage)         
                })
             if (!res.ok)   {
                throw Error('oups')
                return res}
                console.log('message modifié')
                history.go(0)
                
            
            } catch (error) {
                console.log(error);
                
            }            
        }
        

        
        

        return{showModal,deleteMessage,showModal3,message, modifyMessage }
    }

}
</script>

<style>
  .message-card{
    background: rgb(245, 243, 243);
    width: 90%;
    margin:0.5rem auto;
    border-radius: 5px;
    
        
}
.message-card-header{
    
    display: flex;
    align-items: center;
    justify-content: space-between;    
    border-bottom: solid 0.6px rgb(165, 158, 158);
    margin: 0 0.8rem;
    
    margin-bottom: 1rem;
    
}
.message-card-header__user{
    display: flex;
    align-items: center;    
}

.message-card-header__user-name{
    color:#DB0000;
    font-weight: bold;
    padding-left: 0.3rem;
    text-transform: capitalize;
}

.message-card-body{
    width: 95%;
    text-align: left;
    padding-left: 0.8rem;
}

.message-card-footer__date{
    font-size: 0.8rem;
    color: #585656;
    text-align: right;
    padding-right: 0.4rem;
    padding-bottom: 0.4rem;
    

}
.message-card-header__options:hover{
     background: lightgray;
    border-radius: 20%;
}

 
.modal{
    
    padding-left: 0.5rem;
    background: white;
}
.modal-content{
    width: 300px;
    display: flex;
    align-items: center;
    background: white;
    
    padding-left: 0.5rem;
}
.modal-content-text{
    padding-left: 2rem;
}
.backdrop{
   
    background:white;
    margin : 4rem auto 0;
    width: auto;
    border-radius: 3px;   
}
.modalHeader{
    width: 100%;
    background: rgb(31, 25, 25);
    color: white;
    padding: 0.5rem 0;
}
.modal-content:hover{
     background: lightgray;
    border-radius: 20px;
}
@media screen and (min-width: 900px) {
    .backdrop{
        width:400px;
    }


}

</style>