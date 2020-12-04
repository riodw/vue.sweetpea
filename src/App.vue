<template>
  <div id="app">
    <div class="container text-center py-4">
      <div class="jumbotron">
        <div class="row justify-content-center m-0">
          <div class="rounded overflow-hidden">
            <img
              class="rounded-circle"
              alt="Vue logo"
              src="./assets/logo.png"
              style="width: 180px;"
            />
          </div>
          <div>
            <h1>
              Sweetpea being Good?
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
      </div>
      <Chart />
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
