<template>
    
<UserDetails :user="user"/>
  
</template>

<script>
import UserDetails from '../components/UserDetails'
import { ref } from 'vue'


export default {
  components: { UserDetails },
    
     
     setup() {
                    
        const error = ref(null)
        const user = ref('') 
        
               
        
        const getUser = async ()=>{
            try {
                const userid = sessionStorage.getItem("user")
                const res= await fetch('http://localhost:3030/api/users/' + userid, {
                    headers: {
                        Authorization: "Bearer " + sessionStorage.getItem("token")
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
        


        return {  getUser, user }

        
         

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