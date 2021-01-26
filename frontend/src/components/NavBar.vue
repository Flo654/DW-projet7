<template>
 <nav class="main-navBar">
   <div class="main-navBar-wrapper">
     <div class="main-navBar--logo">
       <img src="../assets/logo.png" alt="" width="170">
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
              <p class="navbar-menu-username">{{usert.id}}</p>
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
              <router-link :to="{ name: 'Profil'}" >
                  <p class="navbar-menu-items-text">Mon profil</p>
              </router-link>
              
          </div>
           <div class="navbar-menu-items is-admin">
              <div class=" mdi mdi-account-group icon"></div>
              <p class="navbar-menu-items-text ">Utilisateurs</p>
          </div>
           <div class="navbar-menu-items">
              <div class=" mdi mdi-logout icon"></div>
              <p class="navbar-menu-items-text ">Se deconnecter</p>
          </div>
      </div>
  </div>
 </nav>
 <Message/>
</template>

<script>

import Message from './Message.vue'
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'
export default {
  components: { Message },
  props: {usert},
 
 setup(props){  
    onMounted(()=> console.log('cpn mounted'))
    onUnmounted(()=> console.log('cpn unmounted'))
    onUpdated(()=> console.log('cpn updated'))
     const isShowing = ref(true)
     console.log(props, 'cc');
     
     
     
         
     
        

        return{ isShowing, }
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
    margin-block-end: 0

}

.navbar-menu-logged{
    font-size: 0.8rem;
    font-weight: lighter;
    color: lightgray;
    
}
.navbar-menu-items{
    display: flex;
    align-items: center;

}

.navbar-menu-items-text{
    padding-left: 1rem;
}

.icon:hover{
    
    background: lightgray;
    border-radius: 20%;
    
    
}



</style>