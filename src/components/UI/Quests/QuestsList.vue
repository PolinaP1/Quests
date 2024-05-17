<script>
import axios from 'axios';

import QuestItem from './QuestItem.vue';

export default {
    data() {
        return {
            todos: []
        }
    },

    async created() {
        try {
            const res = await axios.get(`http://localhost:3000/todos`);

            this.todos = res.data;
            console.log(this.todos[0].name);
        }
        catch (e) {
            console.error(e);
        }
    },

    components: {
        QuestItem
    }
}
</script>

<template>
    <section>
<quest-item v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </section>
</template>

<style></style>