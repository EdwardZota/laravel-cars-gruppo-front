<script>
import axios from 'axios';

export default{
    name: 'MyCars',
    data(){
        return {
            cars: [],
            UrlBase: 'http://localhost:8000',
        }
    },
    methods:{
        getCars(){
            axios.get(`${this.UrlBase}/api/cars`)
            .then(response =>{
                this.cars = response.data.results;
            })
        },
    },
    mounted(){
        this.getCars();
    }
}


</script>


<template>

    <div class="container">
        <div class="row">
            <div class="col-3" v-for="car in cars">
                <div class="card" style="width: 18rem;">
     
                    <div class="card-body">
                        <h5 class="card-title">{{ car.brand }}</h5>
                        <p class="card-text">{{ car.model }}</p>
                        <p class="card-text">{{ car.price }} $</p>
                        <p class="card-text">{{ car.cc }}</p>
                        <router-link :to="{name: 'single_car', params: { id: car.id}}" class="btn btn-primary" >Dettaglio</router-link>
                    </div>

                </div>


            </div>
        </div>
    </div>


</template>