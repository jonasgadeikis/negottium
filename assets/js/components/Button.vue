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
            {'Button-sidebar': sidebar},
            {'Button--disabled': disabled},
        ]"
        :disabled="disabled"
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
            sidebar: {
                type: Boolean,
            },
            disabled: {
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

<style scoped lang="scss">
    @import '../../css/colors.scss';

    .Button {
        display: flex;
        padding: 5px;
        border-radius: 5px;
        color: $color-white;
        border: none;
        align-items: center;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s linear;
        text-transform: uppercase;

        &:hover {
            box-shadow: 0 0 10px 0 $color-panelHover;
        }

        &:focus {
            outline: none;
        }

        &--disabled {
            pointer-events: none;
            background-color: $color-disabled !important;
        }

        &-form {
            padding: 10px 30px;
        }

        &--green {
            background-color: $color-success;
        }

        &--red {
            background-color: $color-error;
        }

        &--yellow {
            background-color: $color-warning;
        }

        &-floating {
            border-radius: 50%;
            position: fixed;
            bottom: 20px;
            padding: 10px;
            z-index: 10000;
            box-shadow: 0 0 10px 0 $color-panelShadow;

            &--left {
                left: 20px;
            }

            &--right {
                right: 20px;
            }
        }

        &-sidebar {
            background-color: transparent;
        }
    }

</style>
