<template>
  <v-app color="#dadada">
    <NavigationDrawer />
    <v-content>
      <v-toolbar 
        dark 
        :color="navigationDrawerColor" 
      >
        <v-btn 
          class="ml-3 mr-3" 
          icon 
          @click="changeNavigationView" 
          href="#"
        >
          <v-icon v-if="expandOnHover">mdi-view-quilt</v-icon>
          <v-icon v-else>mdi-dots-vertical</v-icon>
        </v-btn>
        <div class="heading"> {{ selectedMenuName }} </div>
        <v-spacer></v-spacer>
        <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            icon
            href="#"
          >
            <v-icon>mdi-cached mdi-spin</v-icon>
          </v-btn>
        </template>
        <v-color-picker
          v-model="color"
          hide-canvas 
          hide-inputs 
          show-swatches
          class="mx-auto"
        ></v-color-picker>
      </v-menu>
      </v-toolbar>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
import NavigationDrawer from '@/components/NavigationDrawer'

export default {
  name: 'App',
  components: {
    NavigationDrawer,
  },
  data: () => ({
    
  }),
  computed: {
    navigationDrawerColor() {
      return this.$store.state.navigationDrawerColor;
    },
    selectedMenuName() {
      return this.$store.state.selectedMenuName;
    },
    expandOnHover() {
      return this.$store.state.expandOnHover;
    },
    miniVariant() {
      return this.$store.state.miniVariant;
    },
    color: {
      get() {
        return this.$store.state.navigationDrawerColor;
      },
      set(value) {
        this.$store.state.navigationDrawerColor = value;   
      }
    }
  },
  methods: {
    changeNavigationView() {
      this.$store.state.expandOnHover = !this.$store.state.expandOnHover;
      this.$store.state.miniVariant = !this.$store.state.miniVariant;
    }
  }
}
</script>
<style>
.logo-mini {
  float: left;
  text-align: center;
  margin-right: 15px;
}
</style>