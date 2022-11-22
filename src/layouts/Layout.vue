<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          ToDo
        </q-toolbar-title>
        <q-btn
          to="/connexion"
          flat
          icon-right="account_circle"
          label="Se connecter"
          class="absolute-right"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      breakpoint="767"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-list>
          <q-item-label header>
            Menu de navigation
          </q-item-label>

          <q-item
            v-for="lien in liens"
            :key="lien.id"
            :to="lien.route"
            exact
            clickable
          >
            <q-item-section avatar>
              <q-icon :name="lien.icone" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ lien.libelle }}</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="lien in liens"
          :key="lien.id"
          :to="lien.route"
          :icon="lien.icone"
          :label="lien.libelle"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      liens: [ // Tableau des liens de l'application
        {
          id: 1,
          libelle: 'Tâches',
          icone: 'list',
          route: '/'
        },
        {
          id: 2,
          libelle: 'Paramètres',
          icone: 'settings',
          route: '/params'
        }
      ]
    }
  }
}
</script>

<style>
/* Applique les règles de ce bloc uniquement aux écrans >= 768px */
@media screen and (min-width: 768px) {
  /* Cache les éléments avec la classe CSS q-footer */
  .q-footer {
    display: none;
  }
}

/* Lien actif du menu latéral */
.q-drawer .q-router-link--exact-active {
  color: white !important;
}
</style>
