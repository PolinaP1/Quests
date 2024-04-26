<script>
export default {

}
</script>

<template>
    <div class="network">
        <router-link to="/" class="network__item">
            <img src="@/img/Number.png" />
        </router-link>
        <router-link to="/" class="network__item">
            <img src="@/img/Email.png" />
        </router-link>
        <router-link to="/" class="network__item">
            <img src="@/img/Telegram.png" />
        </router-link>
    </div>
</template>

<style>
.netwok{
    display:inline-block;
}
.network__item{
    padding-right: 20px;
}
</style>