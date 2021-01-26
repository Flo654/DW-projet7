<template>
  <vue-final-modal v-model="showModal" name="example">
   <div class="backdrop" >
        <div class="modal" >
            <div class="modal-content">
                <div class="modal__icon-modify-message mdi mdi-pen"></div>
                <div class="modal-content-text">Modifier ce message</div>                
            </div>
            <div class="modal-content">
                <div class="modal__icon-delete-message mdi mdi-delete"></div>
                <div class="modal-content-text">Supprimer ce message</div> 
            </div>  
            <div class="modal-content">
                <div class="modal__icon-delete-message mdi mdi-comment-text"></div>
                <div class="modal-content-text">Faire un commentaire<span class="to-develop"> (à developper)</span></div> 
            </div>            
        </div>
  </div>  
  </vue-final-modal>
</template>

<script>
  export default {
   
      data(){
            return{
                showModal : this.showModal
            }
    
    
  }
  }
  
</script>

<style >
  
.modal{
    padding-left: 0.5rem;
    background: white;
}
.modal-content{
    width: 100%;
    display: flex;
    align-items: center;
    background: white;
    margin: 0 auto;
}
.modal-content-text{
    padding-left: 2rem;
}
.backdrop{
    background: gray;
    padding: 4rem 0;
}
.modal__icon-modify-message:hover, .modal__icon-delete-message:hover{
     background: lightgray;
    border-radius: 20%;
}
  
</style>