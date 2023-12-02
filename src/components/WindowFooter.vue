<template>
    <footer class="footer">
        <textarea rows="1" placeholder="Написать сообщение..." class="footer__input" v-model="messege"></textarea>
        <button class="footer__btn" @click="window = true" v-if="messege.length == 0">
            <img src="@/assets/images/photo.png" alt="">
        </button>
        <button class="footer__btn" @click="sendMess" v-else>
            <img src="@/assets/images/send.png" alt="">
        </button>

        <div class="window" v-if="window" @click="window = false">
            <div class="window__body" @click.stop.prevent>
                <h2 class="window__title">Отправить картинку</h2>
                <div class="window__form">
                    <label>
                        <span>URL</span>
                        <input v-model="photo">
                    </label>
                    <label>
                        <span>Комментарий</span>
                        <textarea v-model="comment"></textarea>
                    </label>
                </div>
                <div class="window__footer">
                    <button class="btn red" @click="window = false">Отмена</button>
                    <button class="btn purpure" @click="sendMessPhoto">ОТПРАВИТЬ</button>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    props: {
        sendId: Number
    },
    data() {
        return {
            messege: '',
            photo: '',
            comment: '',
            window: false,
        }
    },

    methods: {
        sendMess() {
            const time = `${new Date().getHours()} : ${new Date().getMinutes()} `;
            if (this.messege.length > 0) {
                const mess = {}
                mess.body = this.messege.trim()
                mess.sendId = this.sendId
                mess.time = time
                this.$emit('new-mess', mess)
                this.messege = ''
            }
        },

        sendMessPhoto() {
            const time = `${new Date().getHours()} : ${new Date().getMinutes()} `;
            if (this.photo.length > 0) {
                const mess = {}
                mess.body = this.comment.trim()
                mess.photo = this.photo.trim()
                mess.sendId = this.sendId
                mess.time = time
                this.$emit('new-mess', mess)
                this.comment = this.photo = ''
                this.window = false
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>