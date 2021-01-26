<template>
    <div class="container-events">
        <div class="container-events--header">Les évènements à venir</div>
        
            <div class="event-card">
                <div class="event-card-date">
                    <div class="month">Mai</div>
                    <div class="day">21</div>
                </div>
                <div class="event-card-content">
                    <div class="event-card-content-title">Les Estivales du Mas Ollier</div>
                    <div class="place">Saint Chinian</div>
                    <div class="object">Dégustation et visite du domaine</div>
                    <div class="length">toute la journée</div>
                </div>
            </div>   
             <div class="event-card">
                <div class="event-card-date">
                    <div class="month">Juin</div>
                    <div class="day">11</div>
                </div>
                <div class="event-card-content">
                    <div class="event-card-content-title">Rencontre 100% digitale</div>
                    <div class="place">Société WebInfoServices</div>
                    <div class="object">Présentaion de la société</div>
                    <div class="length">de 13h30 à 17h30</div>
                </div>
            </div>   
             <div class="event-card">
                <div class="event-card-date">
                    <div class="month">Juin</div>
                    <div class="day">25</div>
                </div>
                <div class="event-card-content">
                    <div class="event-card-content-title">Atelier 'Devenir un leader'</div>
                    <div class="place">Siège Groupomania</div>
                    <div class="object">4ieme journée de formation</div>
                    <div class="length">toute la journée</div>
                </div>
            </div>           
        
        
    </div>
</template>

<script>
export default {

}
</script>

<style>

.container-events{
    padding:  0.5rem 0.5rem;
    
}
.container-events--header{
    background: rgb(34, 34, 37);
    padding: 1rem 1rem;
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
}
.event-card{
    display: flex;
    margin: 0.8rem 0;
    background: white;
    
}
.event-card-date{
    border: 1px solid;
}
.month{
    width: 4rem;
    background: #EB0000;
    color: white;
    text-align: center;
    padding: 0.2rem auto
}
.day{
    text-align: center;
    padding: 1rem 0;
    font-size: 1.5rem;
    font-weight: bold;
}
.event-card-content{
    margin-left: 0.5rem;
    padding-top: 0.2rem;
}
.event-card-content-title{
    font-size: 0.9rem;
    
    font-weight: bold;
    color: rgb(57, 90, 199);
}
.place{
    padding-bottom: 0.4rem;
    font-weight: bold;
    font-size: 0.8rem;
}
.object,
.length {
    font-size: 0.8rem;
}
.length{
    padding-top: 0.2rem;
}
</style>