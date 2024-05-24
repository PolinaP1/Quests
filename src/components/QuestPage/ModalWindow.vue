<script>

export default {
    props: {
        initialValue: {
            type: Object,
            required: true
        },
        reservation: {
            type: Object,
            required: true
        },
        todo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            hide: true
        }
    },
    methods: {
        hideModel() {
            this.$emit('hideModel')
        }

        // IMask(
        //     document.getElementById('phone-mask')
        // {
        //     mask: '+{7}(000)000-00-00'
        // }
        // )
    }
}
</script>

<template>
    <!-- @click="hideModal" -->
    <div class="modal" @click="hideModel" v-show="this.hide">
        <div class="modal__content" @click="(e) => e.stopPropagation()">
            <div class="modal__content__quest">
                <img :src="require(`@/img/${todo.img}.svg`)" class="modal__content__quest__img" />
                <div class="modal__content__quest__info">
                    <h2 class="modal__content__quest__info__name">{{ todo.name }}</h2>
                    <h2 class="modal__content__quest__info__address">Большая Октябрьская ул., 52А, Ярославль</h2>
                    <div class="modal__content__quest__info__datetime">
                        <h3>{{ initialValue.date }}, </h3>
                        <h3>{{ initialValue.time }}</h3>
                    </div>
                </div>
            </div>
            <h1 class="modal__content__quest__title">Бронирование</h1>
            <div class="modal__content__quest__inputs">
                <div class="modal__content__quest__inputs__name">
                    <h2 class="modal__content__quest__inputs__name__title">Имя:</h2>
                    <input class="modal__content__quest__inputs__name__input" type="text" placeholder="Имя" />
                </div>
                <div class="modal__content__quest__inputs__number">
                    <h2 class="modal__content__quest__inputs__number__title">Номер телефона:</h2>
                    <input class="modal__content__quest__inputs__number__input" type="text"
                        placeholder="+7(000)910-86-85" />
                </div>
            </div>
            <div class="modal__content__quest__players">
                <h2>Количество игроков:</h2>
                <div class="modal__content__quest__players__counting">
                    <button class="modal__content__quest__players__button"><img src="@/img/MinusNumber.svg" /></button>
                    <h2>2</h2>
                    <button class="modal__content__quest__players__button"><img src="@/img/PlusNumber.svg" /></button>
                </div>
            </div>
            <div class="modal__content__quest__sum">
                <h2>Общая сумма:</h2>
                <div class="modal__content__quest__sum__price">
                    <h3 v-for="price in reservation.price_reservation" :key="price" :price="price">{{ price.price }}
                    </h3>
                    <img src="@/img/RubleSum.svg" />
                </div>
            </div>
            <div class="modal__content__quest__buttons">
                <button class="modal__content__quest__buttons__cancel">Отменить</button>
                <button class="modal__content__quest__buttons__reserve">Бронировать</button>
            </div>
        </div>
    </div>
</template>

<style></style>