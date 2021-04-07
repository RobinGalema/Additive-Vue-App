<template>
  <div class="machinepreview">
    <div class="flow flow-left"></div>
    <div class="flow flow-right"></div>
    <div class="modules">
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
  position: relative;
}

.machinepreview .flow {
  position: absolute;
  top: 0px;
  bottom: 8px;
  width: 10px;
}

.flow-left {
  left: 0px;
  background: linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0));
}

.flow-right {
  right: 0px;
  background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,1));
}

.machinepreview .modules {
  overflow: auto;
  white-space: nowrap;
}

.machinepreview .modules .module {
  height: 100%;
  display: inline-block;
  text-align: center;
  vertical-align: top;
}

.machinepreview .modules .module:first-child {
  margin-left: 10px;
}

.machinepreview .modules .module:last-child {
  margin-right: 10px;
}

.machinepreview .modules .module img {
  height: 150px;
}

.machinepreview .modules .module .title {
  font-size: 10px;
  font-family: frank-new, sans-serif;
  font-weight: 700;
  font-style: normal;
}
.machinepreview .modules .module .subtitle {
  font-size: 10px;
}
</style>