<template>
  <div class="cardContainer">
    <ToggleCard
      @show-card-content="showCardContent"
      cardTitle="Currently Running"
    />
    <div v-if="showTheContent">
      <div class="scrolling-wrapper">
        <a
          :key="machine.id"
          v-for="machine in machines"
          class="machineKaart"
          :href="'machines/' + machine.id"
          ><h2>{{ machine.name }}</h2>
          <p>{{ machine.title }} | Core {{ machine.core }}</p>
          <div class="progress">
            <div class="progress-value" style="width:75%"></div>
            <div class="percentage">{{ machine.progress }}%</div>
          </div>
          <div class="tijd">{{ machine.timeRemaining }} remaining</div>
        </a>
      </div>
      <router-link
        :class="[$route.name == 'Machines' ? 'active' : '', 'tab']"
        to="/machines"
      >
        <a>View all</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import ToggleCard from "@/components/Global/ToggleCard.vue";
export default {
  name: "HomeScreenRunning",
  data() {
    return {
      showTheContent: true,
      machines: [
        {
          id: 1,
          title: "Machine 1",
          core: 1,
          name: "DSAD1_SP_1_1",
          image: "additive-5module-view3-2304.png",
          error: false,
          progress: 95,
          timeRemaining: "1h 09m",
          state: "",
        },
        {
          id: 2,
          title: "Machine 2",
          core: 4,
          name: "DSAD1_SP_1_1",
          image: "additive-5module-view3-2304.png",
          error: true,
          progress: 91,
          timeRemaining: "2h 53m",
          state: "Error pre-manufacturing",
        },
        {
          id: 3,
          title: "Machine 3",
          core: 1,
          name: "VR762_LK8",
          image: "additive-5module-view3-2304.png",
          error: false,
          progress: 15,
          timeRemaining: "6d 19h 05m",
          state: "",
        },
        {
          id: 4,
          title: "Machine 4",
          core: 2,
          name: "QB021_NE_3",
          image: "additive-5module-view3-2304.png",
          error: false,
          progress: 69,
          timeRemaining: "2d 11h 03m",
          state: "",
        },
        {
          id: 5,
          title: "Machine 5",
          core: 2,
          name: "R011_IN_1_2",
          image: "additive-5module-view3-2304.png",
          error: false,
          progress: 47,
          timeRemaining: "4d 06h 24m",
          state: "",
        },
        {
          id: 6,
          title: "Machine 6",
          core: 1,
          name: "PL001_JH_3_0",
          image: "additive-5module-view3-2304.png",
          error: true,
          progress: 69,
          timeRemaining: "3d 02h 33m",
          state: "Error pre-manufacturing",
        },
        {
          id: 7,
          title: "Machine 7",
          core: 3,
          name: "NGGYU_04_1",
          image: "additive-5module-view3-2304.png",
          error: true,
          progress: 23,
          timeRemaining: "1d 05h 13m",
          state: "Error pre-manufacturing",
        },
        {
          id: 8,
          title: "Machine 8",
          core: 2,
          name: "FDKE_6_4A",
          image: "additive-5module-view3-2304.png",
          error: false,
          progress: 61,
          timeRemaining: "3d 12h 34m",
          state: "",
        },
      ],
    };
  },
  components: {
    ToggleCard,
  },
  methods: {
    showCardContent() {
      this.showTheContent = !this.showTheContent;
    },
  },
};
</script>

<style scoped>
.cardContainer {
  background: #f8f8f8;
  box-shadow: 0 0 10pt #00000029;
  border-radius: 10px;
  text-align: left;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 8px;
}

.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding-left: 4px;
}

.scrolling-wrapper .machineKaart {
  display: inline-block;
}

.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.scrolling-wrapper-flexbox .machineKaart {
  flex: 0 0 auto;
  margin-right: 3px;
}

.machineKaart {
  width: 112px;
  height: 112px;
  background: #f2f2f2;
  border-radius: 10px;
  margin-right: 12px;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
  box-shadow: 0 0 5px rgb(201, 201, 201);
}

.machineKaart > h2 {
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
  color: black;
}

.machineKaart > p {
  font-size: 12px;
  margin-top: 6px;
  color: black;
}

.scrolling-wrapper::-webkit-scrollbar,
.scrolling-wrapper-flexbox::-webkit-scrollbar {
  display: none;
}

.progress {
  background: #f8f8f8;
  box-shadow: 0 0 3px rgb(194, 194, 194);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  display: flex;
  height: 14px;
  width: 100%;
  margin-top: 24px;
}

.progress-value {
  animation: load 3s normal forwards;
  border-radius: 100px;
  background: #506ed5;
  height: 14px;
  width: 0;
}

.percentage {
  font-size: 12px;
  position: absolute;
  left: 45%;
  color: #f8f8f8;
}

.tijd {
  color: #979797;
  font-size: 12px;
  text-align: center;
  padding-top: 18px;
}

a {
  color: #506ed5;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  padding-top: 4px;
  padding-bottom: 4px;
}
</style>
