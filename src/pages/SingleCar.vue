<script>
import axios from 'axios';
export default{
    name: 'SingleCar',
    data(){
        return {
            car: null,
            UrlBase: 'http://localhost:8000',
        }
    },
    methods:{
        getCars(){
            const id = this.$route.params.id;
            axios.get(`${this.UrlBase}/api/cars/${id}`)
            .then(response =>{
                this.car = response.data.results;
            })
        },
    },
    mounted(){
        this.getCars();
    }
}


</script>


<template>
    
 <div class="card text-center" style="width: 18rem;" v-if="car">
     
     <div class="card-body" >
         <h5 class="card-title">{{ car.brand }}</h5>
         <p class="card-text">{{ car.model }}</p>
         <p class="card-text">{{ car.price }} $</p>
         <p class="card-text">{{ car.cc }}</p>
      
     </div>

 </div>

 <div v-else>
    <h1>Caricamento infinito</h1>
 </div>



</template>