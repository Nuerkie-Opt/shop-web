<template>
    <div>
        <p>Jumbo</p>
        <p>{{mode}}</p>
        <p>{{item}}</p>
    </div>
</template>

<script>
export default {
    props:['mode','item','row', 'col']
}
</script>

<style scoped>

</style>