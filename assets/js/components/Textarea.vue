<template>
    <label class="Input">
        <textarea
            :maxlength="maximum"
            class="Input-value"
            v-model="value"
            @input="$emit('update:model', value)"
        />

        <div class="Input-label">
            <span>{{ name }}</span>
            <span>{{ value.length }} / {{ maximum }}</span>
        </div>
    </label>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
            maximum: {
                type: String,
                required: true,
            },
            model: {
                type: String,
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

    .Input {
        display: flex;
        flex-direction: column;

        &-label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 10px;
            color: $color-text;
        }

        &-value {
            padding: 10px;
            font-size: 18px;
            -webkit-appearance: none;
            background-color: transparent;
            border: none;
            border-bottom: 2px solid $color-primary;
            box-shadow: 0 0 10px 0 rgba(219, 219, 219, 1);
            transition: all 0.3s linear;
            resize: none;
            font-family: Arial, sans-serif;

            &:focus {
                outline: none;
                border-bottom: 2px solid $color-secondary;
            }
        }
    }
</style>
