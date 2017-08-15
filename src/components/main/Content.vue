<template>
  <div class="edit-notes">
    <!-- <div class="title">标题 :</div>
    <input :title="title"> -->
    <textarea :value="activeNoteText" @input="editNote" class="edit-area"></textarea>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapMutations} from 'vuex'
export default {
  computed:{
    activeNoteText(){
      return this.$store.getters.activeNote.text
    }
  },
  methods:{ 
    editNote(e){
       this.$store.dispatch('editNote',e.target.value)
    }
  },
  store
}
</script>

<style>
.edit-notes{
  height:100%;width:70%;
  padding-left:20px;
}
.title{
  height:10%;
  display: flex;
  align-items: center;
 
}
.edit-area{
  margin:10px;
  height:80%; width:95%;
  resize:none;
  border:none;
  font-size:15px;
}
</style>

