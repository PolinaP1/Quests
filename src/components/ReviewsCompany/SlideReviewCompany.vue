<script>
export default {
    props: {
        review: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <div class="review__slide">
        <div class="review__slide__user">
        <img src="@/img/UserReview.svg"/>
        <h2> {{ review.user_name }}</h2>
        </div>
        <h2 class="review__slide__description">{{ review.user_review }}</h2>
    </div>
</template>

<style></style>