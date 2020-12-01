<template>
  <h1>Listado de comprobaciones </h1>
  <div class="row m-2">
        <div class="shadow-lg rounded bg-info text-white p-3 text-center" style="font-size: 0.5rem; z-index:99;">
            <i class="fas fa-road fa-5x m-0"></i>
        </div>
        <div class="col-3"></div>
  </div>
  <div class="shadow-lg p-1 bg-white rounded col-4" style="font-size: 0.9rem; z-index:1; margin-top: -4em;">
    <div><p class="text-info text-right m-0 p-0" style="font-size: 2rem;">{{viajes.numero}}</p><p class=" text-info text-right" style="font-size: 0.9rem; z-index:1; margin-top: -1em;">VIAJES/HORA</p></div>
    <div class="fila">
        <p class="text-success">  <b>{{viajes.numero}}</b> viajes
         <i class="far fa-check-square text-success p-1 float-right"></i>
        </p>
    </div>
    <div class="fila">
        <p class="text-success">  <b>10</b> viajes a Coste 0.00€ Finalizados OK
         <i class="far fa-check-square text-success p-1 float-right"></i>
        </p>
    </div>
    

    <hr>
    <div> {{hola()}}</div>
    <p class="text-secondary text-center"><i class="fas fa-history"></i> Updated at 17:18 h 30/11/2020</p>
  </div>
</template>

<script>
 import json from '../data/viajes.json'

export default {
    data(){
        return{
            viajes: json
        }
    },
    methods:{
        hola(){
            return "Hola"
        },
    }
}
</script>

<style>

</style>