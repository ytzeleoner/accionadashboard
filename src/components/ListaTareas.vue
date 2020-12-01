<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorías</th>
      <th scope="col">Estado</th>
      <th scope="col">Número</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in tareas" :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.nombre}}</td>
      <td>
         <span v-for="(cat,index) in item.categorias" :key="index">
            {{cat}}
            {{
                item.categorias.length === index+1 ? '' : ', '
            }}
          </span>
        </td>
      <td>{{item.estado}}</td>
      <td>{{item.numero}}</td>
      <td>
          <button class="btn-danger btn-sm" @click="deleteTareas(item)">Eliminar</button>
          <router-link :to="{name: 'Editar', params:{ id: item.id}}" class="btn btn-warning btn-sm">Editar</router-link>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
    computed:{
        ...mapState(['tareas'])
    },
    methods:{
        ...mapActions(['deleteTareas'])
    }
}
</script>

<style>

</style>