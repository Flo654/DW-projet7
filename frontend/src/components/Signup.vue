<template>
    <div class="container">
        <div class="container-logo">
            <img src="../assets/icon-left-font-monochrome-white.png" alt="logo entreprise" width="200" >
        </div>
        <form class="form " id="createAccount">
             
            <h1 class="form__title">Creer un compte</h1>
            <div class="form__message form__message--error"></div>
            <div class="form__input-group">
                <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Pseudo">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="email" class="form__input" autofocus placeholder="Adresse Mail">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Mot de passe">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Confirmez mot de passe">
                <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" type="submit">Continuez</button>
            <p class="form__text">
                <a class="form__link" href="./" id="linkLogin">Déja un compte? se connecter</a>
            </p>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>


h1{
    font-size: 18px;
}
#createAccount{
    width: 60%;
    max-width: 400px;
    height: 320px;    
    margin: 4rem auto;
    padding: 2rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background: rgba(255,255,255,0.6)

}
 .container-logo{
     padding-top: 2rem;
 }
.container {   
      
    height: 100vh;
    background-image: url('../assets//ob_44860e_lac-blanc-110.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    
}


.container,
.form__input,
.form__button {
    font: 500 0.8rem 'Quicksand', sans-serif;
}

.form--hidden {
    display: none;
}

.form > *:first-child {
    margin-top: 0;
}

.form > *:last-child {
    margin-bottom: 0;
}

.form__title {
    margin-bottom: 1rem;
    text-align: center;
}

.form__message {
    text-align: center;
    margin-bottom: 1rem;
}

.form__message--success {
    color: #4bb544;
}

.form__message--error {
    color: #cc3333;
}

.form__input-group {
    margin-bottom: 1rem;
}

.form__input {
    display: block;
    width: 100%;
    padding: 0.75rem;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #dddddd;
    outline: none;
    background: #eeeeee;
    transition: background 0.2s, border-color 0.2s;
}

.form__input:focus {
    border-color: #19177c;
    background: #ffffff;
}

.form__input--error {
    color: #cc3333;
    border-color: #cc3333;
}

.form__input-error-message {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color:#cc3333;
}

.form__button {
    width: 100%;
    padding: 1rem 2rem;
    font-weight: bold;
    font-size: 0.8rem;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: #19177c;
}

.form__button:hover {
    background:  #757eaf;
}

.form__button:active {
    transform: scale(0.98);
}

.form__text {
    text-align: center;
}

.form__link {
    color: #252c6a;
    text-decoration: none;
    cursor: pointer;
}

.form__link:hover {
    text-decoration: underline;
}

</style>