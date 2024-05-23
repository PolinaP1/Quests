<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        review: {
            type: Object,
            required: true,
        }
    },

}
</script>

<template>
    <div class="review__slide">
        <div class="review__slide__user">
        <img src="@/img/UserReview.svg"/>
        <h2>Аноним</h2>
        </div>
        <h2 class="review__slide__description" >{{ review.review }}</h2>
    </div>
</template>

<style></style>