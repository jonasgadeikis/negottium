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