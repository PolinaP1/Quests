<script>
import QuestItem from './QuestItem.vue';

export default {
    props: {
        todos: {
            type: Object,
            required: true,
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
            <quest-item v-for="todo in todos" :key="todo.id" :todo="todo" />
        </section>
    </div>
</template>

<style></style>