import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/main'
import ToolBar from '@/components/main/Toolbar'
import NoteList from '@/components/main/NoteList'
import Content from '@/components/main/Content'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Main,
        ToolBar,
        NoteList,
        Content
      }
    }
  ]
})
