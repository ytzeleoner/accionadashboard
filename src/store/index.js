import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
   cargar(state,payload){
    console.log("Enter into cargar mutation")
      state.tareas=payload
    },
   set(state,payload){
     state.tareas.push(payload)
     console.log(state.tareas)
     localStorage.setItem('tareas',JSON.stringify(state.tareas))
   },
   delete(state,payload){
     state.tareas=state.tareas.filter(item => item.id!==payload)
     localStorage.setItem('tareas',JSON.stringify(state.tareas))
   },
   edit(state,payload){
     if (!state.tareas.find(item => item.id=== payload)){
       router.push('/')
     }else{
      state.tarea=state.tareas.find(item => item.id=== payload)
     }
   },
   update(state,payload){
     state.tareas=state.tareas.map(item => item.id === payload.id ? payload : item)
     localStorage.setItem('tareas',JSON.stringify(state.tareas))
     router.push('/')
   }
  },
  actions: {
    cargarLocalStorage({commit}){
      console.log("Enter into cargarLocalStorage")
      if (localStorage.getItem('tareas')){
        const tareas=JSON.parse(localStorage.getItem('tareas'))
        commit ('cargar',tareas)
      }else{
        localStorage.setItem('tareas',JSON.stringify([]))
        console.log("cargado vacio local storage")
      }
    },
    setTareas({commit},tarea){
      commit('set',tarea)
    },
    deleteTareas({commit},tarea){
      commit('delete',tarea.id)
    },
    editTarea({commit},id){
      commit('edit',id)
    },
    updateTarea({commit},tarea){
      commit('update',tarea)
    }
  },
  modules: {
  }
})
