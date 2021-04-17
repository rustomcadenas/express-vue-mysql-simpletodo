<template>
    <div id="TodoCard"> 
        <div class="px-10 mb-4 text-green-500 text-lg font-semibold">
            <h1>Todo List</h1>
        </div>

        <div v-for="todo in Todos" v-bind:key="todo.id" class="mb-4">
            <div class="justify-center px-8">
                <div class="shadow w-full p-2 px-4 rounded border-green-200 border space-y-1">
                    <div class="flex justify-between">
                        <div class="text-xs font-mono text-gray-400">
                            <!-- Date: {{ new Date(todo.created_at).toLocaleDateString("en-us", options) }} -->
                            Date: {{ new Date(todo.created_at).toLocaleString("en-us", options) }}
                        </div> 
                    </div> 
                    <div class="text-center text-gray-500 pl-2 py-2 text-xl font-semibold">
                            {{ todo.todo }}
                    </div>  
                    <hr class="border border-green-200">
                    <div class="flex justify-between space-x-2 p-2">
                        <button>
                            <img class="h-6 opacity-80 hover:opacity-100" src="icons/red-remove.svg">
                        </button>
                        <button>
                            <img class="h-6 opacity-80 hover:opacity-100" src="icons/green-checked.svg" alt="">
                        </button>
                    </div>
                    
                </div>  
            </div>  
        </div> 
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { ref, onMounted } from 'vue';

    const Todos = ref();
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};


    const getTodos = async () => {
        Todos.value = await axios.get('http://localhost:3030/todos').then((response) => response.data);

    };

    onMounted(() => {
        getTodos();

    });

</script>

<style>

</style>