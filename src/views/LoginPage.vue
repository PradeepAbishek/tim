<template>
    <div
        class="tw-flex tw-justify-center tw-mt-16 xs:tw-p-4 sm:tw-p-4"    
    >
        <v-card
            class="xs:tw-w-full sm:tw-w-full md:tw-w-3/5 lg:tw-w-2/5 xl:tw-w-2/5 tw-p-4"    
        >
            <v-sheet 
                dark
                elevation="10  "  
                class="tw-text-center headingTop tw-uppercase"
                :color="headerColor"
            >
                Login
            </v-sheet>         
            <v-card-text 
                class="tw-p-0"
            >
                <v-form>
                    <v-text-field 
                        label="User Name" 
                        prepend-icon="mdi-account-circle"
                        :color="headerColor"
                    >
                    </v-text-field>
                    
                    <v-text-field 
                        label="Password" 
                        prepend-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :color="headerColor"
                    >
                    </v-text-field>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'LoginPage',
    data: () => ({
        showPassword: false,
    }),
    computed: {
        headerColor() {
            return this.$store.state.headerColor;
        }
    }
    
}
</script>