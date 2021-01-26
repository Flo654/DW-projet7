<template>

<div class="singleUser-container">
    <div class="singleUser">
        <div class="singleUser-picture">
            <p class=" userIcon mdi mdi-account-circle"></p>
        </div>
        <div class="singleUser-infos">
            <p>Nom<br><span> {{user.userName}}</span></p>
            <p>Email <br><span>{{user.email}} </span></p>
        </div>        
    </div>
    
    <div class="singleUser-actions">
        <label class="switch">
	        <input v-if="userStatus" @click="switchToUser" class="switch-input" type="checkbox" checked />
            <input v-else  @click="switchToAdmin" class="switch-input" type="checkbox"  />
	        <span class="switch-label" data-on='Admin' data-off="User"></span>
            <span class="switch-handle"></span> 
        </label> 

        <div >
        <p @click="deleteAccount" class=" mdi mdi-delete"></p>
    </div>


    </div>
   

   
</div>


 
 
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['user'],
    setup(props) {
        const userStatus = ref( props.user.isAdmin )
        

        const switchToUser =()=>{
            
        }

        const switchToAdmin = async()=>{

            const beAdmin = !props.user.isAdmin
            const id = props.user.id
            const url = 'http://localhost:3030/api/users/update/' + id
            const newAccountType = {
                isAdmin: beAdmin
            }   
            
            try {
                const response = await fetch(url,{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + sessionStorage.token
                        },
                    body: JSON.stringify(newAccountType)
                })            
                if (!response.ok)   {
                    
                    console.log('pas de reponse')
                    return
                }
                console.log(props.user.userName + ' est Administrateur')
                             
            
            } 
            catch (err) {
                console.log(err);
            
                
            }
            
            
        }

        
        const deleteAccount = async()=>{
            const response =confirm('Voulez vous supprimer ce compte')
            if(!response){return}
            const userId = props.user.id  
            const admin = props.user.isAdmin
                
            const uri ='http://localhost:3030/api/users/delete/' + userId
            
            try {
                const res = await fetch(uri,{
                    method: 'DELETE',
                    headers: {
                        'Authorization': "Bearer " + sessionStorage.getItem("token")
                    },
                    body: null         
                })
             if (!res.ok)   {
                throw Error('oups')
                return res}
            
            } catch (error) {
                console.log(error);
                
            }
        }

        return{userStatus, switchToUser, switchToAdmin, deleteAccount}
        
    }

}
</script>

<style>
.singleUser-picture{
    width: 40px;
    height: 40px;
    background-color: grey;
    border-radius: 50%;
}

.singleUser-container{
    display: flex;
    background: white;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;
}
.singleUser {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;

}
.singleUser-infos{
    padding-left: 1rem;
    padding-bottom: 0.5rem;
}
.singleUser-actions{
    text-align: center;
}
 p.userIcon{
    font-size: 1.7rem;
    margin-block-start: 0;
    margin-block-end: 0;
    justify-content: center;
    padding-top: 0.35rem;
    display: flex;
    color: white;
    
    
    
    
    
}
p.singleUser-infos{
    margin-block-start: 0.2rem;
    margin-block-end: 0;
    font-size: 0.8rem;
}
.singleUser-infos span{
    color: #3453b8;
    font-weight: bold;
    font-size: 0.8rem;
}
.switch {
	position: relative;
	display: block;
	
	width: 80px;
	height: 20px;
	padding: 3px;
	margin: 0 10px 10px 0;
	background: linear-gradient(to bottom, #eeeeee, #FFFFFF 25px);
	background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px);
	border-radius: 18px;
	box-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05);
	cursor: pointer;
	box-sizing:content-box;
}
.switch-input {
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	box-sizing:content-box;
}
.switch-label {
	position: relative;
	display: block;
	height: inherit;
	font-size: 10px;
	text-transform: uppercase;
	background: #eceeef;
	border-radius: inherit;
	box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15);
	box-sizing:content-box;
}
.switch-label:before, .switch-label:after {
	position: absolute;
	top: 50%;
	margin-top: -.5em;
	line-height: 1;
	-webkit-transition: inherit;
	-moz-transition: inherit;
	-o-transition: inherit;
	transition: inherit;
	box-sizing:content-box;
}
.switch-label:before {
	content: attr(data-off);
	right: 11px;
	color: #aaaaaa;
	text-shadow: 0 1px rgba(255, 255, 255, 0.5);
}
.switch-label:after {
	content: attr(data-on);
	left: 11px;
	color: #FFFFFF;
	text-shadow: 0 1px rgba(0, 0, 0, 0.2);
	opacity: 0;
}
.switch-input:checked ~ .switch-label {
	background: #3453b8;
	box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 0 3px rgba(0, 0, 0, 0.2);
}
.switch-input:checked ~ .switch-label:before {
	opacity: 0;
}
.switch-input:checked ~ .switch-label:after {
	opacity: 1;
}
.switch-handle {
	position: absolute;
	top: 4px;
	left: 4px;
	width: 18px;
	height: 18px;
	background: linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0);
	background-image: -webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0);
	border-radius: 100%;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
.switch-handle:before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -6px 0 0 -6px;
	width: 12px;
	height: 12px;
	background: linear-gradient(to bottom, #eeeeee, #FFFFFF);
	background-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);
	border-radius: 6px;
	box-shadow: inset 0 1px rgba(0, 0, 0, 0.02);
}
.switch-input:checked ~ .switch-handle {
	left: 63px;
	box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
}
 
/* Transition
========================== */
.switch-label, .switch-handle {
	transition: All 0.3s ease;
	-webkit-transition: All 0.3s ease;
	-moz-transition: All 0.3s ease;
	-o-transition: All 0.3s ease;
}
</style>