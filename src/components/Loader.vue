<template>
    <div
        class="tw-flex tw-flex-col tw-items-center tw-h-full tw-relative tw-mt-40"
        :class='showLoader ? "" : "tw-hidden"'
    >
        <v-progress-circular
            :size="70"
            indeterminate
            :color="headerColor"
        >   
        </v-progress-circular>
        <div 
            class="heading"
        >
            Loading
        </div>   
    </div>
</template>
<script>
export default {
    name: 'Loader',
    data: () => ({

    }),
    computed: {
        headerColor() {
            return this.$store.state.headerColor;
        },
        showLoader() {
            return this.$store.state.showLoader;
        },
        
    }
}
</script>