<template> 
    <div>
        <CompletedCard 
            :completed_todos="completed_Todos"
            v-on:delete-completed-todo="deleteCompletedTodo($event)"
        />
    </div>
</template>

<script>
import CompletedCard from '../components/CompletedCard.vue';
import axios from '../axios';
import { ref, onMounted } from 'vue';


export default { 

    components: {
        CompletedCard
    },
    
    setup() {

        const completed_Todos = ref([]);

        const getCompletedTodos = async () => {
            completed_Todos.value = await axios.get('/completedtodos')
            .then((response) => response.data);
        } 

        const deleteCompletedTodo = (id) => {
            axios.delete(`todos/${id}`).then((response) => {
                getCompletedTodos();
                
            });
        }

        onMounted(() => {
            getCompletedTodos();
        });

        return{
            completed_Todos, 
            getCompletedTodos,
            deleteCompletedTodo
        }
    }
}
</script>

<style>

</style>