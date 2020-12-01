<template>
   <input type="text" class="form-control m-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre">
  
    <div class="form-check form-check-inline">
      <input type="checkbox" class="form-check-input" v-model="tarea.categorias" value="Javascript">
      <label for="check-1" class="form-check-label">Javascript</label>
    </div>
    <div class="form-check form-check-inline">
      <input type="checkbox" class="form-check-input" v-model="tarea.categorias" value="Node JS">
      <label for="check-2" class="form-check-label">Node JS</label>
    </div>

    <div class="form-check form-check-inline m-2">
      <input type="radio" class="form-check-input" v-model="tarea.estado" value="urgente">
      <label for="radio-1" class="form-check-label">Urgente</label>
    </div>
    <div class="form-check form-check-inline mt-2">
      <input type="radio" class="form-check-input" v-model="tarea.estado" value="relax">
      <label for="radio-2" class="form-check-label">Relax</label>
    </div>
    <div class="mt-2">
      <input type="number" class="form-control" v-model.number="tarea.numero"/>
    </div>
  <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">Procesar</button>
</template>

<script>
export default {
    props:{
        tarea: Object
    }, 
    computed:{
        bloquear(){
            return this.tarea.nombre.trim() === ""
        }
    }
}
</script>

<style>

</style>