import { api } from 'boot/axios'

// State : données du magasin
const state = {
  user: null,
  token: null
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setToken (state, token) {
    state.token = token
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  enregistrerUtilisateur ({ commit, dispatch }, payload) {
    api.post('/register', payload)
      .then(function (response) {
        dispatch('setUser', response.data)
      })
      .catch(function (error) {
        console.log(error.response)
      })
  },
  connecterUtilisateur ({ commit, dispatch }, payload) {
    api.post('/login', payload)
      .then(function (response) {
        dispatch('setUser', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  setUser ({ commit, dispatch }, data) {
    // Sauvegarde les données de l'utilisater et le token dans le magasin
    commit('setUser', data.user)
    commit('setToken', data.token)
    // Redirige l'utilisateur vers la page des tâches
    this.$router.push('/')
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {

}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace à notre objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
