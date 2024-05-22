<script>
import SheduleButton from '../UI/SheduleButton.vue';

export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },

    components: {
        SheduleButton
    }
}
</script>

<template>
    <div class="shedule">
        <div class="shedule__item">
            <h1>Расписание</h1>
            <div class="shedule__item__date">
                <shedule-button>Сегодня</shedule-button>
                <shedule-button class="shedule__item__date__button">Завтра</shedule-button>
                <shedule-button class="shedule__item__date__button">Выбрать период</shedule-button>
            </div>
            <!-- <div class="shedule__item__date">данные из бронирования, которые нужно будет выводить</div> -->
        </div>
    </div>
</template>

<style></style>