<template>
    <div id="modal" class="Modal">
        <div class="Modal-content">
            <slot />
        </div>
    </div>
</template>

<script>
    window.onclick = function(event) {
        let modal = document.getElementById('modal');

        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    export default {

    }
</script>