<script>
// импоритрование библиотеки axios
import axios from 'axios';
//переменная, которая принимает ссылку на базу
const baseUrl = "http://localhost:3000/todos";
import QuestList from '../components/UI/Quests/QuestsList.vue';
import FilteringList from '@/components/UI/Filter/FilteringList.vue';
import RecomendationsList from '@/components/UI/SliderRecomendation/RecomendationsList.vue';


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
    // создание асинхронной функции, которая создает подключение к нужной api
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
        // функция для осуществления фильтрации квестов
        handleGettingData(info, type) {
            // условие используемого фильтра по названию
            if (type == "Тип") {
                // изменение название фильтра на элемент в выпадающем списке, если произошло нажатие на него
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
            //приравнивание пустого массива к тому, который получает данные из базы
            this.keepingData = this.todos;
            if (this.getData.type == '' && this.getData.view == '' && this.getData.number_of_players == '' && this.getData.age == '') {
                return;
            }
            //данные фильтруются
            this.keepingData = this.keepingData.filter(item => {
                //условие: если название фильтра поменялось на элемент в выпадающем списке, происходит приравнивание полей из базы к выбранному
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
        <!-- передается функция, которая в дочернем компоненте передает значения в родительский -->
        <filtering-list @handleGettingData="handleGettingData" />
        <!-- использование базы с возможностью офильтровать список -->
        <quest-list :todos="keepingData" />
    </div>
</template>

<style></style>