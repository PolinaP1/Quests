<script>
import axios from 'axios';
import QuestItem from './QuestItem.vue';

const baseUrl = "http://localhost:3000/todos";

export default {
    data() {
        return {
            todos:[]
        }
    },

    // props: {
    //     todoss: {
    //         type: Object,
    //         required: true,
    //     }
    // },

    async created() {
        try {
            const res = await axios.get(baseUrl);

            this.todos = res.data;
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
    <div class="quests">
        <section class="quests__todos">
            <quest-item v-for="todo in todos" :key="todo.id" :todo="todo"/>
        </section>
    </div>
</template>

<style></style>