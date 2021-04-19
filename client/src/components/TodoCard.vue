<template>
    <div id="TodoCard"> 
        <div class="px-10 mb-4 text-green-500 text-lg font-semibold">
            <h1>Todo List</h1>
        </div>

        <div v-if="cardLoading" class="flex justify-center mb-6 px-8">
            <div class="flex border border-green-200 w-full py-6 items-center justify-center shadow">
                 <img class="w-6 animate-spin" src="icons/loading.svg" alt="">
            </div> 
        </div>

        <div v-for="todo in todos" v-bind:key="todo.id" class="mb-4">
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
                        <button 
                            class="focus:outline-none"
                            @click="deleteTodo(todo.id)"
                        >
                            <img class="h-6 opacity-80 hover:opacity-100" src="icons/red-remove.svg">
                        </button>
                        <button
                            class="focus:outline-none"
                            @click="completeTodo(todo.id)"
                        >
                            <img class="h-6 opacity-80 hover:opacity-100" src="icons/green-checked.svg" alt="">
                        </button>
                    </div> 
                </div>  
            </div>  
        </div> 

        <div v-if="!todos.length">
            <div class="w-full flex text-center justify-center">
                <div class="bg-green-200 py-2 w-96">
                    <h1 class="text-red-400">No Todo</h1>
                </div>
            </div>
        </div> 
    </div>
</template>

<script> 

    export default{ 
        props: {
            todos:{
                type: Object,
                required: true
            }
        },

        setup(props, {emit}){ 

            const cardLoading = false;

            const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
            
            const deleteTodo = (todoID) => {
                emit('delete-todo', todoID);
            }

            const completeTodo = (todoID) => {
                emit('complete-todo', todoID);
            }

            return{
               options,
               deleteTodo,
               completeTodo,
               cardLoading
            }
        }
    }

   
 
</script>

<style>

</style>