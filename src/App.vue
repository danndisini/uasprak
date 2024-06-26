<!-- app.vue -->
<template>
  <div id="app">
    <q-layout view="hHh lpR fFf" class="background-image">
      <q-header elevated class="bg-black text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Weather
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        <q-list>
          <router-link to="/weather">
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Weather</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>
          <router-link to="/meeting1">
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Meeting 1</q-item-label>
              </q-item-section>
            </q-item>
          </router-link>
          
        </q-list>
      </q-drawer>

      <router-view /> 

    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const leftDrawerOpen = ref(false);
    const route = useRoute();

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      route 
    };
  }
};
</script>

<style>

.bg-black {
  background-color: #000000 !important;
}

.background-image {
  background-image: url('/assets/1.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

</style>
