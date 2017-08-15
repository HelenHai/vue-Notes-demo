<template>
  <div class="ToolBar">
    <p @click="addNote" class="tool">+</p>
    <p @click="favourite" class="tool" >*</p>
    <p @click="delNote" class="tool">-</p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState,mapMutations} from 'vuex'
export default {
  name:'ToolBar',
  methods:{
    addNote(){
      this.$store.dispatch('addNote')
    },
    delNote(){
      this.$store.dispatch('delNote')
    },
    favourite(){
      this.$store.dispatch('isFavourite')
    }
  },
  store
}
</script>

<style scoped>
.ToolBar{
  height: 100%;width:8%;
  background: #30414D;
  display: flex;
  flex-direction: column;
  
}
.tool{
  font-size:60px; color:#fff;
  text-align: center;
  cursor: pointer;
  margin:20px;
}
</style>

