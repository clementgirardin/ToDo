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

    <q-item-section
      v-if="tache.dateFin"
      side
    >
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
        @click.stop="afficherFormTache = true"
        dense
        flat
        round
        color="primary"
        icon="edit" />
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

    <q-dialog
      v-model="afficherFormTache"
      persistent
    >
      <form-tache
        @fermer="afficherFormTache = false"
        :tacheAModifier="tache"
        bouton="Modifier"
      >
        Modifier une tâche
      </form-tache>
    </q-dialog>
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
  data () {
    return {
      afficherFormTache: false
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
  },
  components: {
    'form-tache': require('components/Taches/Dialog/FormTache').default
  }
}
</script>

<style>

</style>
