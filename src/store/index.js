import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  state: {
  	allViews: ['people', 'starships', 'planets'],
  	currentView: null,
  	previousPage: null,
  	nextPage: null,
  	people: []
  },
  getters: {
  	allViews: state =>  state.allViews.map(i => i),
  	currentView: state => state.currentView, 
    nextPage: state => state.nextPage,
    previousPage: state => state.previousPage
    people: state => JSON.parse(JSON.stringify(state.people))
  },
  mutations: {
  	SET_CURRENT_VIEW(state, view) {
  		state.currentView = view
  	},
  	SET_PREVIOUS_PAGE(state, pageUrl) {
  		state.previousPage = pageUrl
  	},
  	SET_NEXT_PAGE(state, pageUrl) {
  		state.nextPage = pageUrl
  	},
   	SET_PEOPLE(state, people) {
   		state.people = people
   	}
  },
  actions: {
  	setCurrentView({commit}, view) {
  		commit('SET_CURRENT_VIEW', view)
  	},
  	async getPeople({commit}, pageId) {
  		try {
  			const resp = await this.$axios('people')

  			commit('SET_PREVIOUS_PAGE', resp.data.previous)
  			commit('SET_NEXT_PAGE', resp.data.next)
  			commit('SET_PEOPLE', resp.data.results) 
  		} catch( err ) {
  			console.err('Something wrong with: ', err)
  		}
  	}
  }
}

export default new Vuex.Store(store);
