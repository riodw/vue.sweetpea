<template>
  <div id="app">
    <div class="container text-center py-4 mb-4">
      <div class="rounded overflow-hidden">
        <img
          class="rounded-circle"
          alt="Vue logo"
          src="./assets/logo.png"
          style="width: 180px;"
        />
      </div>
      <div class="jumbotron d-flex mt-3">
        <div class="flex-fill">
          <h1>
            Is Sweetpea being Good?
          </h1>
          <p class="lead">
            Her infractions will tell the story
          </p>
          <p>
            <kbd>@sweetpea</kbd>
            you better behave.
          </p>
        </div>
      </div>
      <div class="card">
        <Chart />
      </div>
      <div class="pb-4 mb-4">
        <AddInfraction />
      </div>
    </div>

    <BottomNav />
  </div>
</template>

<script>
// Components
import AddInfraction from "./components/AddInfraction.vue";
import Chart from "./components/Chart.vue";
import BottomNav from "./components/BottomNav.vue";

export default {
  name: "App",
  components: {
    AddInfraction,
    Chart,
    BottomNav,
  },
};
</script>

<style lang="scss"></style>
