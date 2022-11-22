<template>
  <q-page padding>
    <q-card className="connexion">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="enregistrement">
          <div className="text-h6">Créer un compte</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageConnexion',
  data () {
    return {
      tab: 'connexion'
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ConnexionForm: require('components/Connexion/ConnexionForm').default,
    // eslint-disable-next-line vue/no-unused-components
    EnregistrementForm: require('components/Connexion/ConnexionForm').default
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
