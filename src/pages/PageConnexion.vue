<template>
  <q-page padding>
    <q-card class="connexion">
      <q-tabs
        v-model="tab"
        className="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="connexion" label="Se connecter"/>
        <q-tab name="enregistrement" label="Créer un compte"/>
      </q-tabs>

      <q-separator/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="connexion">
          <div className="text-h6">Se connecter</div>
          <ConnexionForm/>
        </q-tab-panel>

        <q-tab-panel name="enregistrement">
          <div className="text-h6">Créer un compte</div>
          <EnregistrementForm/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import ConnexionForm from 'components/Connexion/ConnexionForm'
import EnregistrementForm from 'components/Connexion/EnregistrementForm'

export default {
  name: 'PageConnexion',
  components: { ConnexionForm, EnregistrementForm },
  data () {
    return {
      tab: 'connexion'
    }
  }
}
</script>

<style scoped>
.connexion {
  max-width: 500px;
  width: auto;
  margin: 0 auto;
}
</style>
