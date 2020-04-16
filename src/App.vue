<template>
  <v-app color="#dadada">
    <NavigationDrawer />
    <v-content>
      <v-toolbar color="tw-bg-blue-500" >
        <v-btn fab small class="mr-3" @click="changeNavigationView" href="#">
          <v-icon v-if="expandOnHover">mdi-view-quilt</v-icon>
          <v-icon v-else>mdi-dots-vertical</v-icon>
        </v-btn>
        <div> {{ selectedMenuName }} </div>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
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