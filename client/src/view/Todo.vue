<template>
    <div id="outer">
        <div class="space-y-8">
            <TodoInput 
                v-on:create-todo="addTodo($event)" 
            />
            <TodoCard 
                :todos="Todos" 
                v-on:delete-todo="deleteTodo($event)"
                v-on:complete-todo="completeTodo($event)"
            />
        </div>
         
    </div>
</template>

<script> 
    import TodoInput from '../components/TodoInput.vue';
    import TodoCard from '../components/TodoCard.vue'; 
    import axios from '../axios';
    import { ref, onMounted } from 'vue';

    export default{
        components: {
            TodoInput,
            TodoCard
        },

        setup(){
                const Todos = ref([]);
                
                const getTodos = async () => {
                    Todos.value = await axios.get('todos').then((response) => response.data);
                };

                const addTodo = newTodo => {
                    axios.post('todos', {
                        name: newTodo
                    }).then(
                        getTodos()
                    );
                }

                const deleteTodo = (id) => {
                    axios.delete(`todos/${id}`)
                    .then((response) => {
                        if(response.status == 200 ){ 
                         getTodos();
                        }else{
                            alert('Something went wrong!')
                        }
                    });
                }

                const completeTodo = (id) => {
                    axios.put(`todos/${id}`)
                    .then((response) => {
                        if(response.status == 200){
                            getTodos();
                        }else{
                            alert(response.data.message);
                        }
                    })
                }
            
                onMounted(() => {
                    getTodos();
                });

                return {
                    Todos,
                    getTodos,
                    addTodo,
                    deleteTodo,
                    completeTodo
                }
            } 
    } 

</script>

<style>

</style>