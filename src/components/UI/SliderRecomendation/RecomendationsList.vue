<script>
import axios from 'axios';
import MyButton from '../../UI/MyButton.vue';
import RecomendationsItem from './RecomendationsItem.vue';

const baseUrl = "http://localhost:3000/todos";

export default {
    data() {
        return {
            todos: [],
            todoName: ''
        }
    },

    async created() {
        try {
            const res = await axios.get(baseUrl);

            this.todos = res.data;
            console.log(this.todos[0].name);
        }
        catch (e) {
            console.error(e);
        }
    },

    components: {
        RecomendationsItem,
        MyButton
    },

    computed: {
        activeSlide() {
            return this.todos.find(todo => todo.isActive);
        }
    },

    mounted() {
        setInterval(() => {
            this.nextSlide();
        }, 1000);
    },
    
    methods: {
        nextSlide() {
            const lastSlideIndex = this.todos.length - 1;
            const currentSlideIndex = this.todos.findIndex(todo => todo.isActive);
            const nextSlideIndex = currentSlideIndex === lastSlideIndex ? 0 : currentSlideIndex + 1;

            this.todos[currentSlideIndex].isActive = false;
            this.todos[nextSlideIndex].isActive = true;
        },
        // prevSlide() {
        //     const lastSlideIndex = this.todos.length - 1;
        //     const currentSlideIndex = this.todos.findIndex(todo => todo.isActive);
        //     const prevSlideIndex = currentSlideIndex === 0 ? lastSlideIndex : currentSlideIndex - 1;

        //     this.todos[currentSlideIndex].isActive = false;
        //     this.todos[prevSlideIndex].isActive = true;
        // }
    }
}
</script>

<template>
    <div class="recomendations">
        <div class="recomendations__carousel">
            <section class="carousel__slide">
                <recomendations-item v-for="(todo, index) in todos" :key="index" :todo="todo" v-bind:style="{ transform: 'translateX(' + (index * -100) + '%)' }"/>
            </section>
        </div>
        <div class="recomendations__controls">
            <!-- <button @click="prevSlide" class="prev"><img src="@/img/Arrow.svg"/></button> -->
            <my-button @click="nextSlide" class="next"><img src="@/img/Arrow.svg"/></my-button>
        </div>
    </div>
</template>

<style>

</style>