<template>
  <!-- Component: <ShortInput inputTitle="Title" inputPlaceholder="Placeholder" />  -->
  <div class="shortInput">
    <div class="title">{{ inputTitle }}</div>
    <input
      type="text"
      v-model="inputText"
      name="inputText"
      :placeholder="`${inputPlaceholder}`"
    />
    <!-- v-model="inputText" zorgt ervoor dat de input gelinkt is met de prop > text -->
  </div>
</template>

<script>
export default {
  name: "ShortInput",
  props: {
    inputTitle: String,
    inputPlaceholder: String,
  },
  data() {
    return {
      inputText: "", //hierin wordt de content van de input opgeslagen
    };
  },
};
</script>

<style scoped>
.shortInput {
  margin-top: 8px;
  margin-bottom: 8px;
}
.title {
font-family: frank-new, sans-serif;
font-weight: 400;
font-style: normal;
font-size: 14px;
}

input {
  height: 42px;
  background: #fff;
  border: 1.5px solid #f2f2f2;
  box-shadow: 0px 0px 10px #00000029;
  border-radius: 5px;
  padding-left: 8px;
  padding-right: 8px;
  width: 95%;
  margin-top: 8px;
  margin-right: 8px;
  border: 0;
  font-family: open-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
}

input:focus {
  outline: none;
  border: 1.5px solid #5268aa;
  transition: 0.3s;
}
</style>
