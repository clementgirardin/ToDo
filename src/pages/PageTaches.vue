<template>
  <q-page padding>
    <q-list
      v-if="taches.length"
      separator
      bordered
    >
      <tache
        v-for="tache in taches"
        :key="tache.id"
        :tache="tache"
      >
      </tache>
    </q-list>

    <q-page-sticky position="bottom" class="q-mb-lg">
      <q-btn @click="afficherFormTache = true"
             fab
             icon="add"
             color="primary" />
    </q-page-sticky>

    <q-dialog
      v-model="afficherFormTache"
      persistent
    >
      <form-tache
        @fermer="afficherFormTache = false"
        bouton="Ajouter"
      >
        Ajouter une tâche
      </form-tache>
    </q-dialog>
  </q-page>
</template>

<script>
// importation des fonctions utilitaires
import { mapGetters } from 'vuex'

export default {
  name: 'PageTaches',
  data () {
    return {
      afficherFormTache: false
    }
  },
  computed: {
    // Mappage des getters ('nomNamespace', ['nomGetter'])
    ...mapGetters('taches', ['taches'])
  },
  components: {
    tache: require('components/Tache').default,
    'form-tache': require('components/Dialog/FormTache').default
  }
}
</script>

<style>
.text-barre {
  text-decoration: line-through;
}
</style>
