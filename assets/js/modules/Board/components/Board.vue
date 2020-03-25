<template>
    <div class="Board" @click.prevent="click">
        <span>{{ name }}</span>
        <span class="material-icons Board-iconColor">send</span>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
        },

        methods: {
            click() {
                this.$emit('click');
            },
        },
    }
</script>