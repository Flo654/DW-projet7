<template>
  <div class="jobs-opp">
      <div class="jobs-opp-header">
          
             <h2>Opportunités de travail</h2> 
          
          <div class="mdi mdi-dots-vertical jobs-opp-icon"></div>
      </div>
      <div class="jobs-opp-content">
          <div class="jobs-opp-content-title">
              Commercial Grands Compte
          </div>
          <div class="jobs-opp-content-inside">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus saepe quia odit eligendi laboriosam commodi ab dol</div>
      </div>
       <div class="jobs-opp-content">
          <div class="jobs-opp-content-title">
              Comptable Senior
          </div>
          <div class="jobs-opp-content-inside">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus saepe quia odit eligendi laboriosam commodi ab dol</div>
      </div>
       <div class="jobs-opp-content">
          <div class="jobs-opp-content-title">
              Chef de projet
          </div>
          <div class="jobs-opp-content-inside">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus saepe quia odit eligendi laboriosam commodi ab dol</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.jobs-opp{
    margin: 0.5rem 0.5rem
}
.jobs-opp-icon{
    
    color: white;

}
.jobs-opp-header{
    background: rgb(34, 34, 37);
    padding: 0 1rem;
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}
.jobs-opp-header h2{
    font-weight: bold;
    font-size: 1.2rem;
}
.jobs-opp-content{
    margin: 01rem 0.4rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid;
}
.jobs-opp-content-title{
    font-weight: bold;
    

}
.jobs-opp-content-inside{
    margin-top: 0.4rem;
    font-size: 0.9rem;
}
</style>