<template>
    <v-navigation-drawer permanent clipped app
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :color="navigationDrawerColor"
    >
        <v-list dark nav>
            <v-list-item-group :color="listColor" v-model="selectedMenu" mandatory>
                <v-list-item
                    v-for="(item, i) in menuLists"
                    :key="i"
                    @click="changeSelectedMenuName(item.text)"
                    :to="item.path"
                >
                    <v-list-item-icon>
                        <v-icon> {{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="heading"> {{ item.text }} </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider class="tw-bg-white"></v-divider>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    name: 'navigationDrawer',
    data: () => ({
    
    }),
    computed: {
        selectedMenu: {
            get() {
                return this.$store.state.selectedMenu;
            },
            set(value) {
                this.$store.state.selectedMenu = value;   
            }
        },
        selectedMenuName() {
            return this.$store.state.selectedMenuName;
        },
        navigationDrawerColor() {
            return this.$store.state.navigationDrawerColor;
        },
        menuLists() {
            return this.$store.state.menuLists;
        },
        expandOnHover() {
            return this.$store.state.expandOnHover;
        },
        miniVariant() {
            return this.$store.state.miniVariant;
        },
        listColor() {
            return this.$store.state.listColor;
        }
    },
    methods: {
        changeSelectedMenuName(newMenuName) {
            this.$store.state.selectedMenuName = newMenuName;
        }
    }
}
</script>