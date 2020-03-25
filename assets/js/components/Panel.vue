<template>
    <div class="Panel">
        <div class="Panel-header">
            <slot name="header"></slot>
        </div>

        <div class="Panel-body">
            <slot name="body"></slot>
        </div>

        <div class="Panel-footer">
            <slot name="footer"></slot>
        </div>

<!--        TODO: Spinner-->
    </div>
</template>

<script>
    export default {
    }
</script>