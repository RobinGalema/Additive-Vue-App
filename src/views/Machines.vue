<template>
  <h1>Machines</h1>
  <MachineCards :machines="machines" />
</template>

<script>
import MachineCards from '../components/Machines/MachineCards'

export default {
  name: 'Machines',
  components: {
    MachineCards
  },
  data() {
    return {
      machines: [
        {
          "id": 1,
          "title": "Machine 1",
          "core": 1,
          "name": "DSAD1_SP_1_1",
          "image": "additive-5module-view3-2304.png",
          "error": false,
          "progress": 95,
          "timeRemaining": '1h 09m',
          "state": ""
        },
        {
          "id": 2,
          "title": "Machine 2",
          "core": 4,
          "name": "DSAD1_SP_1_1",
          "image": "additive-5module-view3-2304.png",
          "error": true,
          "progress": 91,
          "timeRemaining": '2h 53m',
          "state": "Error pre-manufacturing"
        },
        {
          "id": 3,
          "title": "Machine 3",
          "core": 1,
          "name": "VR762_LK8",
          "image": "additive-5module-view3-2304.png",
          "error": false,
          "progress": 15,
          "timeRemaining": '6d 19h 05m',
          "state": ""
        },
        {
          "id": 4,
          "title": "Machine 4",
          "core": 2,
          "name": "QB021_NE_3",
          "image": "additive-5module-view3-2304.png",
          "error": false,
          "progress": 69,
          "timeRemaining": '2d 11h 03m',
          "state": ""
        },
        {
          "id": 5,
          "title": "Machine 5",
          "core": 2,
          "name": "R011_IN_1_2",
          "image": "additive-5module-view3-2304.png",
          "error": false,
          "progress": 47,
          "timeRemaining": '4d 06h 24m',
          "state": ""
        },
        {
          "id": 6,
          "title": "Machine 6",
          "core": 1,
          "name": "PL001_JH_3_0",
          "image": "additive-5module-view3-2304.png",
          "error": true,
          "progress": 69,
          "timeRemaining": '3d 02h 33m',
          "state": "Error pre-manufacturing"
        },
        {
          "id": 7,
          "title": "Machine 7",
          "core": 3,
          "name": "NGGYU_04_1",
          "image": "additive-5module-view3-2304.png",
          "error": true,
          "progress": 23,
          "timeRemaining": '1d 05h 13m',
          "state": "Error pre-manufacturing"
        },
        {
          "id": 8,
          "title": "Machine 8",
          "core": 2,
          "name": "FDKE_6_4A",
          "image": "additive-5module-view3-2304.png",
          "error": false,
          "progress": 61,
          "timeRemaining": '3d 12h 34m',
          "state": ""
        },
      ]
    }
  }
}
</script>