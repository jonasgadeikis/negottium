<template>
    <label class="Select">
        <div class="Select-block">
            <select
                class="Select-value"
                v-model="value"
                @change="$emit('update:model', value)"
            >
                <option selected disabled value=""></option>
                <option v-for="option in options" :value="option.value">{{ option.name }}</option>
            </select>
            <span class="Select-icon material-icons">keyboard_arrow_down</span>
        </div>
        <span class="Select-label">{{ name }}</span>
    </label>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
            model: {
                required: true,
            },
            options: {
                type: Array,
                required: true,
            },
        },

        data() {
            return {
                value: '',
            }
        },
    }
</script>

<style scoped lang="scss">
    @import '../../css/colors.scss';

    .Select {
        display: flex;
        flex-direction: column;

        &-label {
            padding: 5px 10px;
            color: $color-text;
        }

        &-block {
            position: relative;
            display: flex;
            align-items: center;
        }

        &-value {
            padding: 10px;
            font-size: 18px;
            width: 100%;
            -webkit-appearance: none;
            background-color: transparent;
            border: none;
            border-bottom: 2px solid $color-primary;
            box-shadow: 0 0 10px 0 rgba(219, 219, 219, 1);

            &:focus {
                outline: none;
            }
        }

        &-icon {
            position: absolute;
            right: 15px;
            color: $color-primary;
        }

        &-value:focus + &-icon {
            transform: rotate(180deg);
            transition: all 0.3s linear;
        }
    }
</style>
