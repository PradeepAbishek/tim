<template>
    <v-navigation-drawer permanent clipped app
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      color="tw-bg-blue-500"
    >
        <v-list dark nav>
            <v-list-item-group color="black" v-model="selectedMenu" mandatory>
                <v-list-item
                    v-for="(item, i) in userProfile"
                    :key="i"
                    @click="changeSelectedMenuName(item.text)"
                    :to="item.path"
                >
                    <v-list-item-icon>
                        <v-icon> {{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title> {{ item.text }} </v-list-item-title>
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
        userProfile() {
            return this.$store.state.userProfile;
        },
        expandOnHover() {
            return this.$store.state.expandOnHover;
        },
        miniVariant() {
            return this.$store.state.miniVariant;
        },
    },
    methods: {
        changeSelectedMenuName(newMenuName) {
            this.$store.state.selectedMenuName = newMenuName;
        }
    }
}
</script>