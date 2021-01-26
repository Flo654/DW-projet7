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
                <p class="user-card-header__user-name">Flo654</p>
            </div>
            <div class="user-card-content">
                <div class="user-data  mdi mdi-at"></div>
                <p class="user-data-content " id="email">Flo654@hotmail.com</p>
            </div>
            <div class="user-card-content">
                <div class="user-data  mdi mdi-account-details"></div>
                <p class="user-data-content" id="account-type">Administrateur</p>
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
            <p class="user-data-content" id="modify">Supprimer le compte</p>
        </div>
        


    </div>
  
</template>

<script>

export default {
     props:['user'],
     

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
#email, #account-type{
    color:grey;
}
#modify{
    font-weight: bolder;
}
.user-data.title:hover{
     background: lightgray;
    border-radius: 20%;
}
.to-develop{
    font-weight: normal
}
</style>