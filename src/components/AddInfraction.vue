<template>
  <div class="AddInfraction text-left mt-4">
    <h3>
      Sweetpea being bad?
    </h3>

    <b-button v-b-modal.modal-1 variant="primary">
      &#43; Infraction
    </b-button>

    <b-modal id="modal-1" title="SweetPea Was Bad">
      <b-input-group size="lg" prepend="Points." append="🔱" class="mb-4" type="number">
        <b-form-input></b-form-input>
      </b-input-group>
      <b-input-group prepend="Password">
        <b-form-input type="password"></b-form-input>
      </b-input-group>
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
