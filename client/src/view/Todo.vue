<template>
    <div id="outer">
        <div class="space-y-8">
            <TodoInput />
            <TodoCard />
        </div>
         
    </div>
</template>

<script setup>
    import TodoInput from '../components/TodoInput.vue';
    import TodoCard from '../components/TodoCard.vue';
</script>

<style>

</style>