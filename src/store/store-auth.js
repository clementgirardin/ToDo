import { api } from 'boot/axios'

// State : données du magasin
const state = {

}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {

}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  enregistrerUtilisateur ({ commit }, payload) {
    api.post('/register', payload)
      // Afficher le résultat en cas de réussite
      .then(function (response) {
        console.log('CREATION OK', response)
      })
      // En cas d'échec
      .catch(function (error) {
        console.log(error.response)
      })
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
