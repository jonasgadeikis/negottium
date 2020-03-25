<template>
    <h2 class="Title">{{ name }}</h2>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
        },
    }
</script>