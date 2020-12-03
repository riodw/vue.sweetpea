<template>
  <div class="AddInfraction text-left mt-4">
    <h3>
      Sweetpea being bad?
    </h3>

    <b-button v-b-modal.modal-1>
      &#43; Infraction
    </b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "AddInfraction",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
