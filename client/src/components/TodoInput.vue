<template>
<div id="outer">
    <div class="mt-10 justify-center flex space-x-4">
        <div>
            <input 
            autofocus
            class="py-2 pl-2 text-lg font-semibold text-gray-600 w-96 border-b-2 focus:outline-none border-green-100 focus:border-green-300" 
            type="text"
            v-model="todo"
            v-on:keyup.enter="addNewTodo()"
            >
        </div> 
        <div>
            <button 
                class="hover:opacity-100 opacity-70 focus:outline-none mt-2"
                @click="addNewTodo()"    
            >
                <img class="h-8" src="icons/green-right-arrow.svg" alt="">
            </button>
        </div>
    </div>
</div>
</template>

<script > 
    import { ref } from 'vue'; 

    export default{

        setup(props, {emit}){
            const todo = ref();

            const resetTodo = () => {
                todo.value = "";
            }
            
            const addNewTodo = () => {
                if(!todo.value){
                    return;
                }else{
                    emit('create-todo', todo.value);
                    resetTodo();
                }
            }

            return{
                todo,
                resetTodo,
                addNewTodo 
            }
        }
    }
 
</script>

<style>

</style> 