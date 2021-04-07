<template>
  <div class="machinepreview">
    <div class="module">
      <img src="@/assets/printers/additive-7/additive-7_01.png"/>
      <p class="title">Controle module</p>
    </div>
    <div class="module">
      <img src="@/assets/printers/additive-7/additive-7_02.png"/>
      <p class="title">AM Core 1</p>
      <p class="subtitle">Inconel</p>
    </div>
    <div class="module">
      <img src="@/assets/printers/additive-7/additive-7_03.png"/>
      <p class="title">AM Core 2</p>
      <p class="subtitle">Aluminium</p>
    </div>
    <div class="module">
      <img src="@/assets/printers/additive-7/additive-7_04.png"/>
      <p class="title">Heat treatment</p>
    </div>
    <div class="module">
      <img src="@/assets/printers/additive-7/additive-7_05.png"/>
      <p class="title">AM Core 3</p>
      <p class="subtitle">Aluminium</p>
    </div>
    <div class="module">
      <img src="@/assets/printers/additive-7/additive-7_06.png"/>
      <p class="title">AM Core 3</p>
      <p class="subtitle">Aluminium</p>
    </div>
    <div class="module">
      <img src="@/assets/printers/additive-7/additive-7_07.png"/>
      <p class="title">AM Core 3</p>
      <p class="subtitle">Aluminium</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MachinePreview'
}
</script>

<style scoped>
.machinepreview {
  width: 100%;
  overflow: auto;
  white-space: nowrap;
}

.machinepreview .module {
  height: 100%;
  display: inline-block;
  text-align: center;
  vertical-align: top;
}

.machinepreview .module img {
  height: 150px;
}

.machinepreview .module .title {
  font-size: 10px;
  font-family: frank-new, sans-serif;
  font-weight: 700;
  font-style: normal;
}
.machinepreview .module .subtitle {
  font-size: 10px;
}
</style>