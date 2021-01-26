<template>
    <div class="user-card">
        <div class="user-card-header">
            <div class="user-card-header__content">
                <router-link :to="{name: 'MainVue'}">
                    <div class="user-data title mdi mdi-arrow-left"></div>
                </router-link>
                
                <p class="header-content-message-title">Profil</p>
                <div class="user-card__user-infos">
                    <div class="user-card-header__user-logo mdi mdi-account-circle"></div>
                   
                </div>
            </div>
        </div>   
        <div class="info-user">
            <div class="user-card-content">
                <div class="user-data  mdi mdi-account-box"></div>
                <p class="user-card-header__user-name">{{user.userName}}</p>
            </div>
            <div class="user-card-content">
                <div class="user-data  mdi mdi-at"></div>
                <p class="user-data-content " id="email">{{user.email}}</p>
            </div>
            <div class="user-card-content">
                <div class="user-data  mdi mdi-account-details"></div>
                <p class="user-data-content" v-if="user.isAdmin">Profil Administrateur</p>
                <p class="user-data-content" v-else >Profil Utilisateur</p>
            </div>            
        </div>    


        <p class="question">Que voulez vous faire ?</p>
         <div class="user-card-content">
            <div class="user-data title mdi mdi-pen"></div>
            <p class="user-data-content" id="modify">Modifier mot de passe</p>
        </div>
         <div class="user-card-content">
            <div class="user-data title mdi mdi-playlist-plus"></div>
            <p class="user-data-content" id="modify">Ajouter une bio<span class="to-develop"> (à developper)</span></p>
        </div>
        <div class="user-card-content">
            <div class="user-data title mdi mdi-briefcase"></div>
            <p class="user-data-content" id="modify">Ajouter un poste <span class="to-develop"> (à developper)</span></p>
        </div>
        <div class="user-card-content">
            <div class="user-data title mdi mdi-delete-forever"></div>
            <p class="user-data-content" id="modify" @click ="isOk=!isOk" >Supprimer le compte</p>
        </div>
        <vue-final-modal  v-model="isOk" name="example">
     <div class="confirm">
        <div class="confirm__window">
            <div class="confirm__titlebar">
                <span class="confirm__title">Attention!!</span>
                <button @click="isOk = !isOk" class="confirm__close">&times;</button>
            </div>
            <div class="confirm__content">souhaitez vous  vraiment suprimer votre compte ?? 
            </div>
            <div class="confirm__buttons">
                <button @click="deleteAccount" class="confirm__button confirm__button--ok confirm__button--fill">Ok</button>
                <button @click="isOk = !isOk" class="confirm__button confirm__button--ok ">Cancel</button>
                
            </div>


        </div>

        
    </div>
  </vue-final-modal>
        


    </div>

  
</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'

export default {
    props:['user'],

    setup(props,context){    
           
        const isOk = ref(false)
        const router = useRouter()

         const deleteAccount = async()=>{
            isOk.value = !isOk.value
            const userId = props.user.id
            
            const admin = ref (props.user.isAdmin)
            
            const uri ='http://localhost:3030/api/users/delete/' + userId
            

            try {
                const res = await fetch(uri,{
                    method: 'DELETE',
                    headers: {
                        'Authorization': "Bearer " +  sessionStorage.getItem("token")
                    },
                    body: null         
                })
                if (!res.ok)   {
                    throw new Error('oups')
                    }
                sessionStorage.clear()
                router.push({name: 'Welcome'})
            
            } catch (error) {
                console.log(error);
                
            }
            
            
             
            
         }


         return{deleteAccount, isOk}
    }
     

}

</script>

<style>
.user-card{
    background: white;
    padding: 0.5rem;
}
.info-user > .user-card-content{
    margin: 0;
    
}
.info-user{
    padding-top: 1rem;
    padding-bottom: 2rem;
}
.user-card-header__content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #000;
}
.header-content-message-title{
    font-weight: bold;
}
.user-card-content p{
    margin-block-start: 0;
    margin-block-end: 0;
    
    
}

.user-card-content{
    display: flex;
    text-align: left;
    align-items: center;
    margin-top: 0.5rem;
    padding-left: 0.3rem;
}
.question{
    text-align: left;
    color: blue;
    font-weight: bold;
}
.user-card-header__user-name{
    margin-left: 0.5rem;
    font-weight: bold;
    color:rgb(240, 58, 58);

}
.user-data-content{
    margin-left: 0.5rem;
    
}
.user-card-content:hover{
    background: lightgray;
    border-radius: 20px;
}
#email, #account-type{
    color:grey;
}
#modify{
    font-weight: bolder;
    cursor: pointer;
}
.user-data.title:hover{
     background: lightgray;
    border-radius: 20%;
}
.to-develop{
    font-weight: normal
}
</style>