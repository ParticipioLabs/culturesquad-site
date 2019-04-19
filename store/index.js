import Vuex from 'vuex';
// import VuexPersistence from 'vuex-persist'

// const vuexLocalStorage = new VuexPersistence({
//   storage: window.localStorage,
//   reducer: state => ({}),
//   filter: mutation => (['_'].includes(mutation.type))
// })

// Modules
// import auth from './modules/auth'

const state = {

};

const getters = {

};

const mutations = {

};

const actions = {
  nuxtClientInit(context, app) {

  }
};

const store = () => {
  return new Vuex.Store({
    // plugins: [
    //   vuexLocalStorage.plugin
    // ],
    state,
    getters,
    mutations,
    actions
    // modules: {
    //   auth
    // }
  })
};

export default store
