<template>
    <span><span v-html="moneySign"></span> {{convertedPrice}}</span>
</template>

<script>
export default {
    props:['currency', 'price'],
    computed:{
        moneySign(){
            switch (this.currency) {
                case 'NGN':
                    return '&#8358;';
                case 'USD':
                    return '&#36;';
                    break;
                case 'GBP':
                    return '&#163;';
                    break;
                default:
                    return '&#8373;';
            }
        },
        convertedPrice(){
            return this.price;
        }
    }
}
</script>

<style scoped>

</style>