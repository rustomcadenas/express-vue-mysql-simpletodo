<template>
     <div id="TodoCard"> 
        <div class="px-10 pt-10 mb-4 text-green-500 text-lg font-semibold">
            <h1>Completed Todo List</h1>
        </div>

        <div v-for="completed_todo in completed_todos" v-bind:key="completed_todo.id" class="mb-4">
            <div class="justify-center px-8">
                <div class="shadow w-full p-2 px-4 rounded border-green-200 border space-y-1">
                    
                    <div>
                        <div class="text-xs font-mono text-gray-400"> 
                             Date Completed: {{ new Date(completed_todo.updated_at).toLocaleString("en-us", options) }}
                       </div> 
                    </div> 

                    <div class="text-center text-gray-500 pl-2 py-2 text-xl font-semibold">
                            {{ completed_todo.todo }}
                    </div>   

                    <div>
                        <button
                            @click="methods.deleteCompletedTodo(completed_todo.id)"
                        >
                            <img class="w-6 opacity-80 hover:opacity-100" src="icons/delete.svg" alt="">
                        </button>
                    </div>
                </div>  
            </div>  
        </div> 

        <div v-if="!completed_todos.length">
            <div class="w-full flex text-center justify-center">
                <div class="bg-green-200 py-2 w-96">
                    <h1 class="text-red-400">No Todo</h1>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>

export default {
    props: {
        completed_todos: {
            type: Object,
            required: true
        }
    },

    setup(props, {emit}){
        
        const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
        
        const methods = {
            deleteCompletedTodo: (completed_todo_id) => {
                emit('delete-completed-todo', completed_todo_id);
            }

        }
        
        return{
            options,
            methods
        }
    }

}
</script>

<style>

</style>