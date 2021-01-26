<template>
  <div class="home-wrapper">
      <div class="home-logo">
          <img src="../assets/icon-left-font-monochrome-white.png" alt="" width="170">
      </div>
      <div class="home-content">
          <h1>Bienvenu sur le réseau social de <span>Groupomania</span>   </h1>         
      </div>
      <div class="home-content-buttons">        
          <div class="home-icons mdi mdi-account-plus"></div>
        <button class="button-content">S'inscrire</button>
      </div>
       <div class="home-content-buttons">        
          <div class="home-icons mdi mdi-account"></div>
        <button class="button-content">Se connecter</button>
      </div>
        
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home-wrapper{ width: 60%;
    max-width: 400px;
    height: 270px;    
    margin: 2rem auto;
    padding: 1rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background: #19177c;
}
.home-logo{
    margin: 2rem auto;
}
.home-content h1{
    font-size: 14px;
    color: white;
    margin-bottom: 3rem;
    font-weight: lighter;
}

.button-content{
    background: white;
    border: none;
    padding-left: 1rem;
    outline: none;
    font-weight:bold;
    
}
.home-content-buttons{
    
    display: flex;
    background: white;
    margin-top: 1rem;
}
.home-icons{
    padding-left: 0.2rem;

}
</style>