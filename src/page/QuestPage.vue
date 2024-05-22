<script>
import axios from 'axios';
import DemonstrationQuest from '../components/QuestPage/DemonstrationQuest.vue';
import SpecificationsQuest from '../components/QuestPage/SpecificationsQuest.vue';
import LegendQuest from '../components/QuestPage/LegendQuest.vue';
import SheduleQuest from '../components/QuestPage/ScheduleQuest.vue';

const baseUrl = "http://localhost:3000/todos";

export default {
    data() {
        return {
            todos: [],
            parameter: this.$route.params.id
        }
    },

    async created() {
        try {
            const res = await axios.get(baseUrl);
            this.todos = res.data;
            this.keepingData = this.todos;
            this.comparisonParametres();
        }
        catch (e) {
            console.error(e);
        }
    },
    components: {
        DemonstrationQuest,
        SpecificationsQuest,
        LegendQuest,
        SheduleQuest
    },

    methods: {
        comparisonParametres() {
            this.todos = this.todos.filter(item => {
                return item.id == parseInt(this.parameter);
            });
        }
    }
}
</script>

<template>
    <div>
        <demonstration-quest v-for="todo in todos" :key="todo.id" :todo="todo" />
        <specifications-quest v-for="todo in todos" :key="todo.id" :todo="todo"/>
        <legend-quest v-for="todo in todos" :key="todo.id" :todo="todo" />
        <shedule-quest v-for="todo in todos" :key="todo.id" :todo="todo" /> 
    </div>
</template>

<style></style>