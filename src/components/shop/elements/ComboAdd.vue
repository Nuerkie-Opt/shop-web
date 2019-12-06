<template>
    <div>
        <div v-loading="loading"></div>
    </div>
</template>

<script>
export default {
    props:["item"],
    data(){
        return {
            loading:false
        }
    }
}
</script>