<template>
  <ComprobationList/>
</template>

<script>
// @ is an alias to /src

import ComprobationList from '../components/ComprobationList'
import {mapActions} from 'vuex'
const shortid= require('shortid')

export default {
  name: 'Home',
  components: {
      ComprobationList
  },
  data(){
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods:{
    ...mapActions(['setTareas']),
    procesar(){
        
        if (this.tarea.nombre.trim() === ""){
          console.log('Campo vacío')
        }else{
            console.log(this.tarea)
            //Generamos id
            this.tarea.id=shortid.generate()
            console.log("ID "+this.tarea.id)
            //envian los datos
            this.setTareas(this.tarea)

            this.tarea={
              nombre: '',
              categorias: [],
              estado: '',
              numero: 0,
              id: ''
            }
        }
    }
  }
}
</script>
