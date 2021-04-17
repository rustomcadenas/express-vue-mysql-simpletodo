<template>
<div id="outer">
    <div class="mt-10 justify-center flex space-x-4">
        <div>
            <input 
            autofocus
            class="py-2 pl-2 text-lg font-semibold text-gray-600 w-96 border-b-2 focus:outline-none border-green-100 focus:border-green-300" 
            type="text"
            v-model="todo"
            v-on:keyup.enter="btn_add()"
            >
        </div> 
        <div>
            <button 
                class="hover:opacity-100 opacity-70 focus:outline-none"
                @click="btn_add()"    
            >
                <img class="h-8 mt-2" src="icons/green-right-arrow.svg" alt="">
            </button>
        </div>
    </div>
</div>
</template>

<script setup>
    import { ref } from 'vue';

    const todo = ref();

    const btn_add = () => {
        alert(todo.value);
    }
</script>

<style>

</style> 