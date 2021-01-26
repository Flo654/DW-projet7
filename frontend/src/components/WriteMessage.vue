<template>
    <div class="create-message-card">
        <div class="create-message-card-header">
            <div class="create-message-card-header__content">
                <router-link :to="{name: 'MainVue'}"  >
                    <div   class="header-content-logo mdi mdi-arrow-left"></div>
                </router-link>
                
                <p class="header-content-message">Creer une publication</p>
            </div>
            <button class="create-message-card-header__button ">Publier</button>
        </div>
        <div class="create-message-card__user-infos">
            <div class="message-card-header__user-logo mdi mdi-account-circle"></div>
            <div class="message-card-header__user-name">Flo654</div>
        </div>
        <div class="create-message-card-content">
            <textarea aria-label="message" cols="32" title="message" rows="10" placeholder="Ecrivez votre message ici ...." ></textarea>
        </div>


    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.create-message-card{
    padding:0 0.5rem;
    background: white;
    margin-bottom: 1rem;
}
.create-message-card-header{
    display: flex;
    
    align-items: center;
    justify-content: space-between
}
.create-message-card-header__content{
    display: flex;
    align-items: center;
}

.header-content-message{
    padding-left: 0.5rem;
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