<template>
<Message/>
<div v-for="post in posts" :key="post.id">
   <div class="message-card">
        <div class="message-card-header">
            <div class="message-card-header__user">
                <div class="message-card-header__user-logo mdi mdi-account-circle"></div>
                <div class="message-card-header__user-name">{{post.userName}}</div>
            </div>
            <div class="message-card-header__options mdi mdi-dots-vertical" @click="showModal = true"></div>
        </div>
        <div class="message-card-body">
            <p class="message-card-body__content">{{post.content}}</p>
        </div>
        <div class="message-card-footer">
            <p class="message-card-footer__date"> crée le {{post.updatedAt.slice(0,10)}} à {{post.updatedAt.slice(11, 19)}}</p>
        
        </div>
        
    <vue-final-modal v-model="showModal" name="example">
   <div class="backdrop" >
        <div class="modal" >
            <div class="modal-content">
                <div class="modal__icon-modify-message mdi mdi-pen"></div>
                <router-link :to="{name: 'Modify'}">
                    <div class="modal-content-text">Modifier ce message</div> 
                </router-link>
                               
            </div>
            <div class="modal-content">
                <div class="modal__icon-delete-message mdi mdi-delete"></div>
                <div class="modal-content-text">Supprimer ce message</div> 
            </div>  
            <div class="modal-content">
                <div class="modal__icon-delete-message mdi mdi-comment-text"></div>
                <div class="modal-content-text">Commenter<span class="to-develop"> (à developper)</span></div> 
            </div>            
        </div>
  </div>  
  </vue-final-modal>
    </div> 
    
        
    </div>

</template>

<script>
import Message from './Message.vue'
import getPosts from './getPosts'
import { ref } from 'vue'


export default {
   
  components: { Message },
  setup(){
    const showModal = ref(false)
    const { posts, error, load} = getPosts()
    
    
    load()
    console.log(posts)

    return{ posts, error, showModal}
    }

}
 


</script>

<style>
.message-card{
    background: white;
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto
        
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
    color: rgb(240, 58, 58);
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
    color: rgb(196, 195, 195);
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
    width: 100%;
    display: flex;
    align-items: center;
    background: white;
    margin: 0 auto;
}
.modal-content-text{
    padding-left: 2rem;
}
.backdrop{
    background: gray;
    margin-top: 4rem
}
.modal__icon-modify-message:hover, .modal__icon-delete-message:hover{
     background: lightgray;
    border-radius: 20%;
}
</style>