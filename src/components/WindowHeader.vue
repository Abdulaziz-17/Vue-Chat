<template>
    <div class=" massengers__window-header">
        <img :src="avatars[src]" alt="" class="massengers__window-avatar">
        <div class="massengers__window-info">
            <h2 class="massengers__window-name">{{ name }}</h2>
            <p class="massengers__window-status">{{ status }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['src', 'name', 'status'],

    data() {
        return {
            avatars: {
                alex: require('@/assets/images/alex.png'),
                evgn: require('@/assets/images/evgeniy.png')
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>