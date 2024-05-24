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
            hide: true,
            count: 2,
            phoneNumber: '',
            firstName: ''
        }
    },

    methods: {
        hideModel() {
            this.$emit('hideModel')
        },
        plusClicked() {
            if (this.count < 6) {
                this.count++;
            }
        },
        minusClicked() {
            if (this.count > 2) {
                this.count--;
            }
        },
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[A-Za-z]+$/.test(char)) return true;
            else e.preventDefault();
        },
        formatPhoneNumber() {
            let cleaned = this.phoneNumber.replace(/\D/g, '');
            let formatted = cleaned.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '+7($1)$2-$3-$4');
            this.phoneNumber = formatted;
        },
        allowBackspace(event) {
            if (event.key === 'Backspace') {
                event.preventDefault();
                let cleaned = this.phoneNumber.replace(/\D/g, '');
                cleaned = cleaned.slice(0, cleaned.length - 11);
                let formatted = cleaned.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '+7($1)$2-$3-$4');
                this.phoneNumber = formatted;
            }
        },
        updateValue(event) {
            const value = event.target.value
            if (String(value).length <= 10) {
                this.phoneNumber = value
            }
            this.$forceUpdate()
        },
        checkInput(){
            if(this.phoneNumber == '' || this.firstName == ''){
                alert("Для забронирования квеста Вам необходимо заполнить поля: 'Имя' и 'Номер телефона'")
            }
        }
    }
}


</script>

<template>
    <div class="modal" @click="hideModel" v-show="this.hide">
        <div class="modal__content" @click="(e) => e.stopPropagation()">
            <div class="modal__content__quest">
                <img :src="require(`@/img/${todo.img}.svg`)" class="modal__content__quest__img" />
                <div class="modal__content__quest__info">
                    <h2 class="modal__content__quest__info__name">{{ todo.name }}</h2>
                    <h2>Большая Октябрьская ул., 52А, Ярославль</h2>
                    <div class="modal__content__quest__info__datetime">
                        <h3>{{ initialValue.date }}, </h3>
                        <h3>{{ initialValue.time }}</h3>
                    </div>
                </div>
            </div>
            <h1 class="modal__content__title">Бронирование</h1>
            <div class="modal__content__inputs">
                <div class="modal__content__inputs__name">
                    <h2>Имя:</h2>
                    <input class="modal__content__inputs__input" type="text" placeholder="Анастасия" v-model="firstName"
                        v-on:keypress="isLetter($event)" />
                </div>
                <div class="modal__content__inputs__number">
                    <h2>Номер телефона:</h2>
                    <input @input="formatPhoneNumber" v-model="phoneNumber" class="modal__content__inputs__input"
                        type="text" placeholder="+7(987)856-54-85" @keydown.backspace="allowBackspace" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength = "16" />
                </div>
            </div>
            <div class="modal__content__players">
                <h2>Количество игроков:</h2>
                <div class="modal__content__players__counting">
                    <button class="modal__content__players__button" @click="minusClicked"><img
                            src="@/img/MinusNumber.svg" /></button>
                    <h2>{{ count }}</h2>
                    <button class="modal__content__players__button" @click="plusClicked"><img
                            src="@/img/PlusNumber.svg" /></button>
                </div>
            </div>
            <div class="modal__content__sum">
                <h2>Общая сумма:</h2>
                <div class="modal__content__sum__price">
                    <h2>{{ reservation.price_reservation.price }}</h2>
                    <img src="@/img/RubleSum.svg" />
                </div>
            </div>
            <div class="modal__content__buttons">
                <button class="modal__content__buttons__cancel" @click="hideModel">Отменить</button>
                <button class="modal__content__buttons__reserve" @click="checkInput">Забронировать</button>
            </div>
        </div>
    </div>
</template>

<style></style>