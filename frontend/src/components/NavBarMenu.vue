<template>
  <div class="navbar-menu-wrapper">
      <div class="navbar-menu-header">
          <div class="mdi mdi-account-circle"></div>
          <div class="navbar-menu-user">
              <p class="navbar-menu-username">Flo654</p>
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
              <p class="navbar-menu-items-text">Mon profil</p>
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
</template>

<script>
export default {

}
</script>

<style>
.navbar-menu-wrapper{
    border-bottom: solid 1px;
    margin: 5rem;
    padding: 0 1rem
}
.navbar-menu-header{
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    border-bottom: solid 0.3px;
    background: blue;

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