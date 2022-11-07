<template>
  <q-item
    @click="modifierTache(
      {
        id: tache.id,
        updates: {
          terminee: !tache.terminee
        }
      }
    )"
    clickable
    v-ripple
    :class="tache.terminee ? 'bg-green-1' : 'bg-orange-1'"
  >
    <q-item-section side>
      <q-checkbox
        :value="tache.terminee"
        class="no-pointer-events"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-barre': tache.terminee }"
      >{{ tache.nom }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <!-- Création d'une ligne Flex -->
      <div class="row">
        <!-- Création d'une colonne Flex -->
        <div class="column justify-center">
          <q-icon
            size="18px"
            name="event"
            class="q-mr-xs"
          />
        </div>
        <!-- Création d'une colonne Flex -->
        <div class="column">
          <q-item-label
            class="text-right"
            caption
          >
            {{ tache.dateFin }}
          </q-item-label>
          <q-item-label
            class="text-right"
            caption
          >
            <small>{{ tache.heureFin}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn
        @click.stop="confirmerSuppression(tache.id)"
        dense
        flat
        round
        color="negative"
        icon="delete" />
    </q-item-section>
  </q-item>
</template>

<script>
// importation des fonctions utilitaires
import { mapActions } from 'vuex'

export default {
  name: 'Tache',
  props: {
    tache: {
      type: Object,
      required: true
    }
  },
  methods: {
    // Mappage des actions ('nomNamespace', ['nomGetter'])
    ...mapActions('taches', ['modifierTache', 'supprimerTache']),
    // Ouvre une boite de dialog pour confirmer la suppression
    confirmerSuppression (id) {
      this.$q.dialog({
        title: 'Supprimer tâche',
        message: 'Voulez-vous vraiement supprimer cette tâche ?',
        cancel: 'Annuler',
        ok: 'Supprimer',
        persistent: true
      }).onOk(() => {
        this.supprimerTache(id)
      })
    }
  }
}
</script>

<style>

</style>
