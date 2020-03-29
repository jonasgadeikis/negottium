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