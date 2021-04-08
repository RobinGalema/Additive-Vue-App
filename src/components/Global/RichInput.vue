<template>
  <!-- Component:   <RichInput textareaTitle="Title" textareaPlaceholder="Placeholder" />  -->
  <div class="richInput">
    <div class="title">{{ textareaTitle }}</div>
    <textarea
      type="text"
      v-model="textareaText"
      name="textareaText"
      :placeholder="`${textareaPlaceholder}`"
    />
    <!-- v-model="textareaText" zorgt ervoor dat de textarea gelinkt is met de prop > text -->
  </div>
</template>

<script>
export default {
  name: "ShortInput",
  props: {
    textareaTitle: String,
    textareaPlaceholder: String,
  },
  data() {
    return {
      textareaText: "", //hierin wordt de content van de textarea opgeslagen
    };
  },
};
</script>

<style scoped>
.richInput {
  margin-top: 8px;
  margin-bottom: 8px;
}

.title {
font-family: frank-new, sans-serif;
font-weight: 400;
font-style: normal;
font-size: 14px;
}


textarea {
  height: 80px;
  background: #fff;
  border: 1.5px solid #f2f2f2;
  box-shadow: 0px 0px 10px #00000029;
  border-radius: 5px;
  padding: 8px;
  outline: none;
  width: 95%;
  margin-top: 8px;
  margin-right: 8px;
  font-family: open-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
}

textarea:focus {
  border: 1.5px solid #5268aa;
  transition: 0.3s;
}
</style>
