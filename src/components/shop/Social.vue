<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.$ga.event({
      eventCategory: "FromSocialMedia",
      eventAction: "count",
      eventLabel: "social",
      eventValue: this.$route.params.media
    });

    this.$router.push('/');
  }
};
</script>