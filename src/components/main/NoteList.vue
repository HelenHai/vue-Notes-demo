
<template>
  <div class="NoteList">
    <div class="tab-btn">
      <button id="all-notes" @click="show='all'" v-bind:class="{active:show=='all'}">ALL</button>
      <button id="favourite-notes" @click="show='favourite'" v-bind:class="{active:show=='favourite'}">FAVOURITE</button> 
    </div>
    <div class="notes">
      <p v-for="note in notes" :key="note.id" class="note-item" @click="setActiveNote(note)" :class="{active:activeNote==note}">{{note.text}}</p> 
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return{
      show:'all'
    }
  },
  computed:{
    notes(){
      if(this.show=='all') {
        return this.$store.getters.notes
      }
      else if(this.show=='favourite') {
        return this.$store.getters.notes.filter(note=>note.favourite)
      }
    },
    activeNote(){
      return this.$store.getters.activeNote
    }
  },
  methods:{
    ...mapActions(['setActiveNote'])
  },
  store
}
</script>

<style scoped>
.NoteList{
  height:100%;width:22%;
  background: #F5F5F5;
  
}
.tab-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  height:12%; width:100%;
}
button{
  border-radius: 5px;
  border:none;
  background-color: #30414D;
  height:30px; width:100px;
  color:#fff;
  margin-left:10px;
  cursor: pointer;
}
.notes{
  height:88%;width:100%;
  /* background-color:  */
  overflow: auto;
  
}
.note-item{
  height:9%;width:100%;
  background-color: #fff;
  list-style: none;
  border-bottom:1px solid #8e8e8e;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: block; overflow: hidden;
}
.note-item:hover{
  background-color:#337AB7;
}

</style>

