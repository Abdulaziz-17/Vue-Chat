<template>
    <main class="main">
        <TransitionGroup name="list">
            <div class="main__chatitem" v-for="(mess, index) in message" :key="index">
                <div class="main__chatitem-body" :class="{
                    send: mess.sendId == sendId,
                    get: mess.sendId != sendId,
                    photo: mess.photo?.length> 0 && mess.body.length == 0,
                    'photo-text' : mess.photo?.length > 0 && mess.body.length > 0 ,
                }">
                    <span class="main__chatitem-time">{{ mess.time }}</span>
                    <div class="main__chatitem-text">
                        <img :src="mess.photo" v-if="mess.photo?.length > 0" alt="">
                        <p>{{ mess.body }}</p>
                    </div>
                </div>
            </div>
        </TransitionGroup>
    </main>
</template>

<script>
export default {
    props: {
        message: Array,
        sendId: Number
    }
}
</script>

<style lang="scss" scoped></style>