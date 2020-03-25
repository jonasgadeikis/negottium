<template>
    <div class="app">
        <Sidebar />
        <router-view />
    </div>
</template>

<script>
    import Sidebar from './modules/Sidebar/components/Sidebar';

    export default {
        components: {
            Sidebar,
        },
    }
</script>