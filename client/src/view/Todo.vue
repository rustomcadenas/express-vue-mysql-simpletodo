<template>
    <div id="outer">
        <div class="space-y-8">
            <TodoInput 
                v-on:create-todo="addTodo($event)"
            />
            <TodoCard 
                :todos="Todos" 
                v-on:delete-todo="deleteTodo($event)"
            />
        </div>
         
    </div>
</template>

<script> 
    import TodoInput from '../components/TodoInput.vue';
    import TodoCard from '../components/TodoCard.vue'; 
    import axios from 'axios';
    import { ref, onMounted } from 'vue';

    export default{
        components: {
            TodoInput,
            TodoCard
        },

        setup(){
                const Todos = ref([]);
                
                const getTodos = async () => {
                    Todos.value = await axios.get('http://localhost:3030/todos').then((response) => response.data);
                };

                const addTodo = newTodo => {
                    axios.post('http://localhost:3030/todos', {
                        name: newTodo
                    }).then(
                        getTodos()
                    );
                }

                const deleteTodo = (id) => {
                    axios.delete(`http://localhost:3030/todos/${id}`)
                    .then((response) => {
                        if(response.status == 200 ){ 
                         getTodos();
                        }else{
                            alert('Something went wrong!')
                        }
                    });
                }
            
                onMounted(() => {
                    getTodos();
                });

                return {
                    Todos,
                    getTodos,
                    addTodo,
                    deleteTodo
                }
            } 
    } 

</script>

<style>

</style>