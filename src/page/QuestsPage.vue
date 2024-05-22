<script>
import axios from 'axios';
import QuestList from '../components/UI/Quests/QuestsList.vue';
import FilteringList from '@/components/UI/Filter/FilteringList.vue';
import RecomendationsList from '@/components/UI/SliderRecomendation/RecomendationsList.vue';

const baseUrl = "http://localhost:3000/todos";

export default {
    data() {
        return {
            keepingData: [],
            todos: [],
            getData: {
                type: '',
                view: '',
                number_of_players: '',
                age: ''
            }
        }
    },

    async created() {
        try {
            const res = await axios.get(baseUrl);
            this.todos = res.data;
            this.keepingData = this.todos;
        }
        catch (e) {
            console.error(e);
        }
    },

    components: {
        RecomendationsList,
        FilteringList,
        QuestList
    },

    methods: {
        handleGettingData(info, type) {
            if (type == "Тип") {
                this.getData.type = info
            }
            if (type == "Вид") {
                this.getData.view = info
            }
            if (type == "Игроки") {
                this.getData.number_of_players = info
            }
            if (type == "Возраст") {
                this.getData.age = info
            }
            this.keepingData = this.todos;
            if (this.getData.type == '' && this.getData.view == '' && this.getData.number_of_players == '' && this.getData.age == '') {
                return;
            }
            
            this.keepingData = this.keepingData.filter(item => {
                const typeFilter = this.getData.type ? item.type_quest.type === this.getData.type : true;
                const viewFilter = this.getData.view ? item.view_quest.view === this.getData.view : true;
                const playersFilter = this.getData.number_of_players ? item.number_of_players_quest.number_of_players === this.getData.number_of_players : true;
                const ageFilter = this.getData.age ? item.age_quest.age === this.getData.age : true;

                return typeFilter && viewFilter && playersFilter && ageFilter;
            });
            console.log(this.getData);
        }
    },
}
</script>

<template>
    <div class="quests">
        <recomendations-list />
        <filtering-list @handleGettingData="handleGettingData" />
        <quest-list :todos="keepingData" />
    </div>
</template>

<style></style>