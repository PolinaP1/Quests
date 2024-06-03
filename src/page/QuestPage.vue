<script>
import axios from 'axios';
import DemonstrationQuest from '../components/QuestPage/DemonstrationQuest.vue';
import SpecificationsQuest from '../components/QuestPage/SpecificationsQuest.vue';
import LegendQuest from '../components/QuestPage/LegendQuest.vue';
import SheduleQuestSelect from '../components/QuestPage/ScheduleQuestSelect.vue';
import SwiperReviewQuest from '../components/QuestPage/SwiperReview/SwiperReviewQuest.vue';

const baseUrl = "http://localhost:3000/todos";

export default {
    data() {
        return {
            todos: [],
            parameter: this.$route.params.id
        }
    },

    components: {
        DemonstrationQuest,
        SpecificationsQuest,
        LegendQuest,
        SheduleQuestSelect,
        SwiperReviewQuest
    },

    mounted() {
        this.created()
    },

    methods: {
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
        comparisonParametres() {
            this.todos = this.todos.filter(item => {
                return item.id == parseInt(this.parameter);
            });
        },
        async updatetimereservation(time, isActive) {
            const todoToUpdate = this.todos.find(todo => todo.id === this.parameter);
            if (!todoToUpdate) {
                console.error('Todo not found');
                return;
            }

            const updatedTimeReservation = todoToUpdate.time_reservation.map(timeReservation => {
                if (timeReservation.time === time) {
                    return { ...timeReservation, isActive };
                }
                return timeReservation;
            });

            try {
                const response = await axios.put(`${baseUrl}/${this.parameter}`, {
                    ...todoToUpdate,
                    time_reservation: updatedTimeReservation
                });
                console.log('Updated todo:', response.data);
                // Обновляем локальный стейт после успешного запроса
                this.todos = this.todos.map(todo =>
                    todo.id === this.parameter ? { ...todo, time_reservation: updatedTimeReservation } : todo
                );
            } catch (error) {
                console.error('Error updating todo:', error);
            }
        }
    }
}
</script>

<template>
    <div>
        <demonstration-quest v-for="todo in todos" :key="todo.id" :todo="todo" />
        <specifications-quest v-for="todo in todos" :key="todo.id" :todo="todo" />
        <legend-quest v-for="todo in todos" :key="todo.id" :todo="todo" />
        <shedule-quest-select v-for="todo in todos" :key="todo.id" :todo="todo" @created="created" />
        <swiper-review-quest v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
</template>

<style></style>