<template>
    <div class="tw-flex tw-flex-row tw-flex-wrap tw-justify-center tw-content-center tw-h-full">
        <v-hover
            v-for="menu in menus" :key="menu.id"
            v-slot:default="{ hover }"
        >
            <v-card
                :elevation="hover ? 20 : 2"
                class="tw-m-4 tw-flex tw-flex-col sm:tw-w-4/5 md:tw-w-2/5 lg:tw-w-1/5 xl:tw-w-1/5 tw-rounded-lg tw-items-center tw-p-4"
            >
                <v-btn class="mx-2" :class="menu.color" fab>
                    <v-icon> {{ menu.icon }} </v-icon>
                </v-btn>
                <v-card-title class="tw-text-base"> {{ menu.name }} </v-card-title>
            </v-card>
        </v-hover>
    </div>
</template>
<script>
export default {
    name: 'Dashboard',

    data: () => ({
        menus : [
            {
                id: '1',
                name: 'Add New Student',
                icon: 'mdi-plus',
                color: 'tw-bg-red-500',
            },
            {
                id: '2',
                name: 'View Students',
                icon: 'mdi-view-list',
                color: 'tw-bg-orange-500',
            },
            {
                id: '3',
                name: 'Add New Student',
                icon: 'mdi-plus',
                color: 'tw-bg-teal-500',
            },
            {
                id: '4',
                name: 'View Students',
                icon: 'mdi-view-list',
                color: 'tw-bg-blue-500',
            },
            {
                id: '5',
                name: 'Add New Student',
                icon: 'mdi-plus',
                color: 'tw-bg-purple-500',
            },
            {
                id: '6',
                name: 'View Students',
                icon: 'mdi-view-list',
                color: 'tw-bg-green-500',
            },
            {
                id: '7',
                name: 'Add New Student',
                icon: 'mdi-plus',
                color: 'tw-bg-indigo-500',
            },
            {
                id: '8',
                name: 'View Students',
                icon: 'mdi-view-list',
                color: 'tw-bg-pink-500',
            },
            {
                id: '9',
                name: 'Add New Student',
                icon: 'mdi-plus',
                color: 'tw-bg-red-900',
            },
            {
                id: '10',
                name: 'Add New Student',
                icon: 'mdi-plus',
                color: 'tw-bg-blue-900',
            },
            {
                id: '11',
                name: 'View Students',
                icon: 'mdi-view-list',
                color: 'tw-bg-teal-900',
            },
            {
                id: '12',
                name: 'Add New Student',
                icon: 'mdi-plus',
                color: 'tw-bg-purple-900',
            },
        ],

    }),
}
</script>
