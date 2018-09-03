<template>
    <div id='merge-option'>
        {{msg}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '哈哈哈哈哈哈飞洒'
            }
        },
        created() {
            console.log('child created')
        },
        mounted() {
            console.log('child mounted')
        }
    }
</script>

<style scoped>

</style>