<script>
import SheduleButton from '../UI/SheduleButton.vue';
import ModalWindow from './ModalWindow.vue';
import axios from 'axios';

const baseReservationUrl = "http://localhost:5500/reservations";

export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            visibilityModal: false,
            reservations: [],
            todos: this.todo,
            active: "",
            visibleDate: false,
            initialValue: {
                type: '',
                date: '',
                time: ''
            }
        }
    },

    async created() {
        try {
            const res = await axios.get(baseReservationUrl);
            this.reservations = res.data;
        }
        catch (e) {
            console.error(e);
        }
    },
    components: {
        SheduleButton,
        ModalWindow
    },

    methods: {
        activeButton(text) {
            this.active = text;
            this.initialValue = {
                type: text,
                date: '',
                time: ''
            }

            if (text == "Сегодня") {
                this.initialValue.date = '24.05.2024';
            }

            if (text == "Завтра") {
                this.initialValue.date = '25.05.2024';
            }

            if (text == "Выбрать дату") {
                this.visibleDate = true;
            }
            else {
                this.visibleDate = false;
            }
            console.log(this.initialValue)
        },

        changeDate(date) {
            this.initialValue.date = date;
        },

        changeTime(time) {
            this.initialValue.time = time;
            if (this.initialValue.date != '') {
                this.showModal();
            }
            else {
                alert("Сначала выберите дату резервирования квеста")
            }

        },

        cancelDate() {
            this.visibleDate = false;
        },

        showModal() {
            this.visibilityModal = true;
        },

        hideModel() {
            this.visibilityModal = false;
        },

        async updateData(number_user, name_user) {
            try {
                const reservation = this.reservations[0];
                const response = await axios.put(`${baseReservationUrl}/${this.$route.params.id}`,
                    {
                        ...reservation,
                        name_user: name_user,
                        number_user: number_user

                    });
                console.log(response.data);
            }
            catch (e) {
                console.error(e);
            }
        },


        async emitSelectedTime(selectedTime, noActive) {
            try {
                const tod = this.todos;
                const selectedTimeIndex = this.todo.time_reservation.findIndex(time => time.time === selectedTime);
                const responseTodo = await axios.put(`http://localhost:3000/todos/${this.$route.params.id}`, {
                    ...tod,
                    time_reservation: tod.time_reservation.map(timeSlot =>
                        timeSlot.id_time == selectedTimeIndex + 1 ? { ...timeSlot, isActive: noActive } : timeSlot
                    )
                    
                });
                console.log(responseTodo.data);
                this.$emit('created');
                
            } catch (e) {
                console.error(e);
            }
        },
    },

    computed: {
        filteredReviews() {
            return this.reservations.filter(reservation => reservation.id === this.todo.id);
        }
    }
}
</script>

<template>
    <div class="shedule">
        <div class="shedule__item">
            <h1>Расписание</h1>
            <div class="shedule__item__date">
                <shedule-button
                    :class="[this.active == 'Сегодня' ? 'shedule__item__date__active' : 'shedule__item__date__button']"
                    @click="activeButton('Сегодня')">Сегодня</shedule-button>
                <shedule-button
                    :class="[this.active == 'Завтра' ? 'shedule__item__date__active' : 'shedule__item__date__button']"
                    @click="activeButton('Завтра')">Завтра</shedule-button>
                <div class="shedule__item__date__period">
                    <shedule-button
                        :class="[this.active == 'Выбрать дату' ? 'shedule__item__date__active' : 'shedule__item__date__button']"
                        @click="activeButton('Выбрать дату')"> {{ (this.initialValue.type == 'Выбрать дату' &&
                        this.initialValue.date != '') ? this.initialValue.date : 'Выбрать дату' }}</shedule-button>
                    <div class="shedule__item__date__period__option" v-show="visibleDate">
                        <div class="shedule__item__date__period__option__reservation"
                            v-for="reservation in filteredReviews" :key="reservation" :reservation="reservation">
                            <div class="shedule__item__date__period__option__reservation__hover"
                                v-for="date in reservation.date_reservation" :key="date" :date="date">
                                <h2 class="shedule__item__date__period__option__reservation__title"
                                    @click="changeDate(date.date)">{{ date.date }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="shedule__item__date__clear" v-show="visibleDate" @click="cancelDate"><img
                        src="@/img/CancelFiltering.svg" /></button>
            </div>
            <div class="shedule__item__time">
                <shedule-button
                    :class="{ 'shedule__item__time__button': !time.isActive, 'shedule__button': time.isActive }"
                    v-for="time in todo.time_reservation" :key="time" :time="time" @click="changeTime(time.time)">{{
                        time.time }}
                </shedule-button>
            </div>
        </div>
    </div>
    <div v-show="visibilityModal">
        <modal-window @hideModel="hideModel" v-for="reservation in reservations" :key="reservation"
            :reservation="reservation" :initialValue="initialValue" :todo="todo" @updateData="updateData"
            @emitSelectedTime="emitSelectedTime" />
    </div>
</template>

<style></style>