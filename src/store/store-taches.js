// State : données du magasin
import { api } from 'boot/axios'
import { afficherMessageErreur } from 'src/fonction/message-erreur'

const state = {
  taches: [
    {
      id: 1,
      nom: 'Acheter des oranges',
      terminee: false,
      dateFin: '06.06.2020',
      heureFin: '12:00'
    },
    {
      id: 2,
      nom: 'Manger des oranges',
      terminee: false,
      dateFin: '15.06.2020',
      heureFin: '22:00'
    },
    {
      id: 3,
      nom: 'Digérer des oranges',
      terminee: false,
      dateFin: '16.06.2020',
      heureFin: '14:00'
    }
  ],
  tachesChargees: false
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {

  setTachesChargees (state, valeur) {
    state.tachesChargees = valeur
  },

  modifierTache (state, payload) {
    // Recherche la tâche et retourne sa position dans le tableau, son index
    const index = state.taches.findIndex(el => el.id === payload.id)

    // Si une tâche a été trouvée
    if (index !== -1) {
      // Modifie l'objet trouvé avec les nouvelles valeurs
      Object.assign(state.taches[index], payload.updates)
    }
  },
  supprimerTache (state, id) {
    // Filtre les données du tableau
    // et garde les tâches dont l'id est différent de celui à supprimer
    state.taches = state.taches.filter(el => el.id !== id)
  },
  ajouterTache (state, tache) {
    // Ajout de la tâche à fin du tableau
    state.taches.push(tache)
  },
  setTaches (state, taches) {
    state.taches = taches
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  modifierTache ({ commit }, payload) {
    // Valide la mutation et y passe les données
    commit('modifierTache', payload)
  },
  supprimerTache ({ commit }, id) {
    console.log('action supprimerTache')
    commit('supprimerTache', id)
  },
  ajouterTache ({ commit }, tache) {
    let uId = 1
    // Si le tableau contient des éléments
    if (state.taches.length) {
      // Récupère l'id MAX et lui ajoute 1
      uId = Math.max(...state.taches.map(tache => tache.id)) + 1
    }
    // Ajoute le nouvel id à la tache
    tache.id = uId
    // Commite l'ajout
    commit('ajouterTache', tache)
  },
  getTachesApi ({ commit, rootState }) {
    commit('setTachesChargees', false)
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    api.get('/taches', config)
      .then(function (response) {
        commit('setTaches', response.data)
        commit('setTachesChargees', true)
      })
      .catch(function (error) {
        afficherMessageErreur(
          'Erreur lors de la récupération des tâches !'
        )
        throw error
      })
  },
  viderTaches ({ commit }) {
    commit('setTaches', [])
    commit('setTachesChargees', false)
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  // Prend le state comme 1er paramètre
  taches: (state) => {
    return state.taches
  }
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
