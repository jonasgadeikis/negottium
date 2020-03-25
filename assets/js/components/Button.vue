<template>
    <button
        type="button"
        :class="[
            'Button',
            {'Button--green': green},
            {'Button--red': red},
            {'Button--yellow': yellow},
            {'Button-floating': floating},
            {'Button-floating--left': left},
            {'Button-floating--right': right},
            {'Button-form': form},
        ]"
        @click.prevent="click"
    >
        <slot />
    </button>
</template>

<script>
    export default {
        props: {
            green: {
                type: Boolean,
            },
            red: {
                type: Boolean,
            },
            yellow: {
                type: Boolean,
            },
            floating: {
                type: Boolean,
            },
            left: {
                type: Boolean,
            },
            right: {
                type: Boolean,
            },
            form: {
                type: Boolean,
            },
        },

        methods: {
            click() {
                this.$emit('click');
            },
        },
    }
</script>