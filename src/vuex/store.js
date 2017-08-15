import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: [],      //将所有笔记存放到一个数组
  activeNote: {}  //将被激活的笔记存放到一个单独的对象
}

const mutations = {
  ADD_NOTE(state) { 
    const NEW_NOTE = {
      text:"NEW NOTE",
      // text: "开始记录生活...",
      favourite: false
    }
    state.notes.push(NEW_NOTE)
    state.activeNote = NEW_NOTE
  },
  SET_ACTIVE_NOTE(state, note) { 
    state.activeNote = note
  },
  EDIT_NOTE(state,text) { 
    state.activeNote.text = text
  },
  DEL_NOTE(state) { 
    for (var i = 0; i < state.notes.length; i++) { 
      if (state.notes[i] == state.activeNote) { 
        state.notes.splice(i, 1)
      }
    }
    if (state.notes.length > 0) { 
      state.activeNote = state.notes[0]
    }
    else state.activeNote.text=''
    
  },
  COLLECT_NOTE(state) { 
    state.activeNote.favourite = !state.activeNote.favourite
    if(state.activeNote.favourite) alert('收藏成功')
    if(!state.activeNote.favourite) alert('取消收藏')
  }, 
}

const getters = {
  notes: state => state.notes,
  activeNote: state => state.activeNote
}

const actions = {
  addNote({ commit }) { 
    commit('ADD_NOTE')
  },
  delNote({ commit }) { 
    commit('DEL_NOTE')
  },
  editNote({ commit }, text) { 
    commit('EDIT_NOTE',text)
  },
  setActiveNote({ commit },note) { 
    commit('SET_ACTIVE_NOTE',note)
  },
  isFavourite({ commit }) { 
    commit('COLLECT_NOTE')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})