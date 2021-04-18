<template>
<div id="outer">
    <div class="">
        <navigation />
    </div>
</div>
</template>

<script>
    import navigation from './components/Navigation.vue';
    export default{
        components:{
            navigation
        }
    }
    
</script>

<style lang="postcss">
    button{
        @apply focus:outline-none
    }
</style>