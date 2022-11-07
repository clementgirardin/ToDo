<template>
  <q-page padding>
    <q-list separator bordered>
      <tache v-for="tache in taches"
             :key="tache.id"
             :tache="tache">
      </tache>
    </q-list>
  </q-page>
</template>

<script>
// importation des fonctions utilitaires
import { mapGetters } from 'vuex'

export default {
  name: 'PageTaches',
  computed: {
    // Mappage des getters ('nomNamespace', ['nomGetter'])
    ...mapGetters('taches', ['taches'])
  },
  components: {
    tache: require('components/Tache').default
  }
}
</script>

<style>
.text-barre {
  text-decoration: line-through;
}
</style>
