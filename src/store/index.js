import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  state: {
  	allViews: ['people', 'starships', 'planets'],
  	currentView: null,
  	currentPage: null,
  	previousPage: null,
  	nextPage: null,
  	allPeople: {},
  	people: []
  },
  getters: {
  	allViews: state =>  state.allViews.map(i => i),
  	currentView: state => state.currentView, 
    nextPage: state => state.nextPage,
    previousPage: state => state.previousPage,
    people: state => JSON.parse(JSON.stringify(state.people))
  },
  mutations: {
  	SET_CURRENT_VIEW(state, view) {
  		state.currentView = view
  	},
  	SET_CURRENT_PAGE(state, pageUrl) {
  		state.currentPage = pageUrl
  	},
  	SET_PREVIOUS_PAGE(state, pageUrl) {
  		state.previousPage = pageUrl
  	},
  	SET_NEXT_PAGE(state, pageUrl) {
  		state.nextPage = pageUrl
  	},

  	ADD_NEW_PEOPLE_DATA(state, obj) {
  		state.allPeople[obj.url] = obj.data
  	},
   	SET_PEOPLE(state, people) {
   		state.people = people
   	}
  },
  actions: {
  	setCurrentView({commit}, view) {
  		commit('SET_CURRENT_VIEW', view)
  	},
  	async getPeople({commit, state}, pageUrl) {
  		try {
  			let dataObj = {}
  			const newUrl = pageUrl? pageUrl: 'people'

  			if(newUrl in state.allPeople) {
  				dataObj = state.allPeople[newUrl]
  			} else {
	  			const resp = await this.$axios(newUrl)

	  			commit('ADD_NEW_PEOPLE_DATA', {
	  				url:newUrl, 
	  				data: resp.data
	  			})
	  			dataObj = resp.data	   				
  			}
				commit('SET_CURRENT_PAGE', newUrl)
  			commit('SET_PREVIOUS_PAGE', dataObj.previous)
  			commit('SET_NEXT_PAGE', dataObj.next)
  			commit('SET_PEOPLE', dataObj.results)
  		} catch( err ) {
  			console.error('Something wrong with: ', err)
  		}
  	},
  	async getNewData({commit, dispatch}, obj) {
  		switch(obj.type) {
  			case 'people':
  				dispatch('getPeople', obj.url)
  				break
  			default:
  				console.error('Wrong page type: ', obj.type) 
  		}
  	}
  }
}

export default new Vuex.Store(store);
