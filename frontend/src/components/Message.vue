<template>
    <div class="message-wrapper">      
        <div class="mdi mdi-account-circle" ></div>  
        <router-link :to="{ name : 'Create'}">
            <input type="text" class="message-wrapper-input" autofocus placeholder="Ecrivez un message...">
        </router-link>        
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .message-wrapper{
        background: white;        
        display: flex;
        margin: 0.5rem 0;
        padding: 1rem 0.5rem;
        width: 100%;
        max-width: 400px;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        border-top: solid 0.3px;
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
        padding-right: 4rem;

        
    }

</style>