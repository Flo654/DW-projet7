<template>
    <section v-if="users.length" >
        <header>
           <div class="user-card-header2">
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
        </header>
        <Users :users='users' />      
    </section>
    <div v-else>
            <Spinner/>
        </div>
</template>

<script>
import { ref } from 'vue';
import Users from "../components/Users";
import Spinner from '../components/Spinner'
export default {
    components: {Users, Spinner},
    setup() {

        const users = ref([])
        const getUsers = async()=>{

            const url = 'http://localhost:3030/api/users'
            try {
                const response = await fetch(url,{
                    headers: {
                        Authorization: "Bearer " +  sessionStorage.getItem("token")
                    } 
                })
                const data = await response.json()
                
                users.value = data
                console.log(users);
            } catch (error) {
                
            }
            


        }
        getUsers()
      
      


      return{  users }
    }
}
</script>

<style>
.user-card-header2{
    background: white;
    margin-bottom: 1rem;
    
}

</style>