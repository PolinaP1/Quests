<script>
import QuestItem from './QuestItem.vue';

export default {
    data() {
        return {
            
        }
    },

    props: {
        todoss: {
            type: Object,
            required: true,
        }
    },

    components: {
        QuestItem
    },

    mounted(){
        // console.log(this.todoss)
    }
}
</script>

<template>
    <div class="quests">
        <section class="quests__todos">
            <quest-item v-for="todo in todoss" :key="todo.id" :todo="todo" />
        </section>
    </div>
</template>

<style></style>