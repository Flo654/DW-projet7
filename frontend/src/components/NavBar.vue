<template>
  <nav class="main-navBar">
   <div class="main-navBar-wrapper">
     <div class="main-navBar--logo">
       <img src="../assets/logo.png" alt="logo groupomania" width="170">
     </div>
     <div class="main-navBar--icons">       
       <div class=" icons  mdi mdi-account-circle"></div>
       <div class=" icons mdi mdi-dots-vertical" @click=" isShowing = !isShowing "></div>
     </div>
   </div>
   <div class="navbar-menu-wrapper" v-if="isShowing">
      <div class="navbar-menu-header">
          <div class="mdi mdi-account-circle"></div>
          <div class="navbar-menu-user">
              <p class="navbar-menu-username">{{user.userName}}</p>
              <p class="navbar-menu-logged">Logged In</p>
          </div>
      </div>
      <div class="navbar-menu-content">
          <div class="navbar-menu-items">
              <div class=" mdi mdi-home-city icon"></div>
              <p class="navbar-menu-items-text">Accueil</p>
          </div>
          <div class="navbar-menu-items">
              <div class=" mdi mdi-cog icon"></div>
              <router-link :to="{name: 'Profile', params: {id: user.id}}" >
                  <p class="navbar-menu-items-text">Mon profil</p>
              </router-link>       
          </div>
           <div class="navbar-menu-items is-admin" v-if="user.isAdmin" >
               <div class=" mdi mdi-account-group icon"></div>
               <router-link :to="{name: 'UsersList'}">                    
                    <p class="navbar-menu-items-text "  >Utilisateurs</p>
               </router-link>
              
          </div>
           <div class="navbar-menu-items">
              <div class=" mdi mdi-logout icon"></div>
              <p class="navbar-menu-items-text " @click="isOk = true">Se deconnecter</p>
          </div>
      </div>
  </div>
 </nav>
  <vue-final-modal  v-model="isOk" name="example">
     <div class="confirm">
        <div class="confirm__window">
            <div class="confirm__titlebar">
                <span class="confirm__title">Déconnection!!</span>
                <button @click="isOk = false" class="confirm__close">&times;</button>
            </div>
            <div class="confirm__content">souhaitez vous vous deconnecter ?? 
            </div>
            <div class="confirm__buttons">
                <button @click="logout" class="confirm__button confirm__button--ok confirm__button--fill">Ok</button>
                <button @click="isOk = false" class="confirm__button confirm__button--ok ">Cancel</button>
                
            </div>


        </div>

        
    </div>
  </vue-final-modal>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {

    setup() {
        const isShowing = ref(false)            
        const error = ref(null)
        const user = ref('') 
        const isOk = ref(false)
        const router = useRouter()
               
        
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
                
                user.value = {
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

        const logout = ()=>{
            isOk.value = !isOk.value
            sessionStorage.clear()
            router.push({name: 'Welcome'})

        }
        


        return { isShowing, getUser, user,logout, isOk}
    }   
}

</script>

<style>

 
.main-navBar-wrapper{
  background: white;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.3px;
 
}

.main-navBar--icons{
  display: flex;  
  text-align:center;
  margin-right: 10px;
  align-items: center;
  
}
.mdi{
  font-size: 30px;
  color: rgb(165, 158, 158);
  
  
}

.main-navBar--logo{

margin-left: 10px;
}

.icons.mdi-account-circle:hover, .icons.mdi-dots-vertical:hover{
   background: lightgray;
    border-radius: 20%;
}
.navbar-menu-wrapper{
    background: white;
    padding: 0 1rem
}
.navbar-menu-header{
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    border-bottom: solid 0.3px;

}
.navbar-menu-user{
    text-align: left;
}
.navbar-menu-user p{
    
    padding-left: 1rem;
    margin-block-start: 0;
    margin-block-end: 0;
    
}
.navbar-menu-username{
    color: rgb(240, 58, 58);
    font-weight: bold;
}

.navbar-menu-items-text{
    margin-block-start: 0;
    margin-block-end: 0;
    

}
.navbar-menu-items a{
    text-decoration: none;
}

.navbar-menu-logged{
    font-size: 0.8rem;
    font-weight: lighter;
    color: lightgray;
    
}
.navbar-menu-items{
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    cursor: pointer;

}

.navbar-menu-items-text{
    padding-left: 1rem;
}

.navbar-menu-items:hover{
    
    background: lightgray;
    border-radius: 20px;
    
    
}
p.navbar-menu-items-text{
    text-decoration: none;
    color:black
}
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
.confirm__content,
.confirm__buttons {
    padding: 1.25rem;
}
.confirm__titlebar{
    background: #222222;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.confirm__title{
    font-weight: bold;
    

}

.confirm__close{
    background: none;
    outline: none;
    border: none;
    transform: scale(2.5);
    color:white;
    transition: color 0.2s;


}

.confirm__close:hover{
    color: red;
    cursor: pointer;
}

.confirm__content{
    line-height: 1.1rem;
}


.confirm__buttons{
    background: #eeeeee;
    display: flex;
    justify-content: flex-end;
}

.confirm__button{
    padding: 0.4rem 0.8rem;
    border: 2px solid #281b97;
    border-radius: 5px;
    background: white;
    color: #281b97;
    font-weight: bold;
    
    font-family: sans-serif;
    margin-left: 0.6rem;
    cursor: pointer;
    outline: none;

}

.confirm__button--fill{
    background: #281b97;
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
</style>