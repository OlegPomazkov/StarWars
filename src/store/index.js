import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  state: {
  	allViews: ['people', 'starships'],
  	currentView: null,
  	currentPage: null,
  	previousPage: null,
  	nextPage: null,
  	allPeople: {},
  	people: [],
  	allFilms: {},
  	films: [],
  	allPlanets: {},
  	planet: null,
  	allStarships: {},
  	starships: []
  },
  getters: {
  	allViews: state =>  state.allViews.map(i => i),
  	currentView: state => state.currentView, 
    nextPage: state => state.nextPage,
    previousPage: state => state.previousPage,
    people: state => JSON.parse(JSON.stringify(state.people)),
    films: state => state.films.map(i=>i),
    planet: state => state.planet,
    starships: state => JSON.parse(JSON.stringify(state.starships))
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
   	},
   	ADD_NEW_FILM(state, obj) {
  		state.allFilms[obj.url] = obj.data
  	},
  	SET_FILMS(state, arr) {
  		state.films = arr.map(item => state.allFilms[item])
  	},
  	ADD_NEW_PLANET(state, obj) {
  		state.allPlanets[obj.url] = obj.data
  	},
  	SET_PLANET(state, url) {
  		state.planet = state.allPlanets[url]
  	},

  	ADD_NEW_STARSHIPS_DATA(state, obj) {
  		state.allStarships[obj.url] = obj.data
  	},
   	SET_STARSHIPS(state, starships) {
   		state.starships = starships
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
  	async getStarships({commit, state}, pageUrl) {
  		try {
  			let dataObj = {}
  			const newUrl = pageUrl? pageUrl: 'starships'

  			if(newUrl in state.allStarships) {
  				dataObj = state.allStarships[newUrl]
  			} else {
	  			const resp = await this.$axios(newUrl)

	  			commit('ADD_NEW_STARSHIPS_DATA', {
	  				url:newUrl, 
	  				data: resp.data
	  			})
	  			dataObj = resp.data	   				
  			}
				commit('SET_CURRENT_PAGE', newUrl)
  			commit('SET_PREVIOUS_PAGE', dataObj.previous)
  			commit('SET_NEXT_PAGE', dataObj.next)
  			commit('SET_STARSHIPS', dataObj.results)
  		} catch( err ) {
  			console.error('Something wrong with: ', err)
  		}
  	},
  	async getNewData({commit, dispatch}, obj) {
  		switch(obj.type) {
  			case 'people':
  				dispatch('getPeople', obj.url)
  				break
  			case 'starships':
  				dispatch('getStarships', obj.url)
  				break
  			default:
  				console.error('Wrong page type: ', obj.type) 
  		}
  	},
  	async getFilms({commit, state}, urlArr) {
  		for( let i=0; i < urlArr.length; i++ ) {
  			if (!(urlArr[i] in state.allFilms)) {
  				const resp = await this.$axios.get(urlArr[i])

  				commit('ADD_NEW_FILM', {
	  				url: urlArr[i], 
	  				data: resp.data.title
	  			})
  			}
  		}
  		commit('SET_FILMS', urlArr)
  	},
  	async setHomeWorldName({commit, state}, url) {
		  if (!(url in state.allPlanets)) {
				const resp = await this.$axios.get(url)

				commit('ADD_NEW_PLANET', {
  				url: url, 
  				data: resp.data.name
  			})
			}
			commit('SET_PLANET', url)
  	}
  }
}

export default new Vuex.Store(store);
