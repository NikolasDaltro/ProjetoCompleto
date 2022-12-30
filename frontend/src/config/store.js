import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vue.Store({
    state:{
        isMenuVisible: true
    },
    mutations: {
        toggleMenu(state, isVisible){
            if(isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible
            }else {
                state.isMenuVisible = isVisible
            }
            console.log('toggleMenu = ' + state.isMenuVisible)
        }
    }
})