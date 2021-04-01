<template>
    <!-- Component:   <RichInput textareaTitle="Title" textareaPlaceholder="Placeholder" />  -->
    <div class="richInput">
        <div class="title">{{textareaTitle}}</div>
        <textarea type="text" v-model="textareaText" name="textareaText" :placeholder="`${textareaPlaceholder}`" /> <!-- v-model="textareaText" zorgt ervoor dat de textarea gelinkt is met de prop > text -->
        
    </div>
</template>

<script>
export default {
    name: "ShortInput",
    props:{
        textareaTitle: String, 
        textareaPlaceholder: String,
    },
    data(){
        return{
            textareaText: "", //hierin wordt de content van de textarea opgeslagen
        }
    }
}
</script>

<style scoped>

    .richInput{
        margin-top: 8px;
        margin-bottom: 8px;
    }

    textarea{
        height: 54px;
        background: #F2F2F2;
        border: 1.5px solid #F2F2F2;
        border-radius: 5px;
        padding: 8px;
        outline: none;
        width: 100%;
        margin-top: 8px;
        margin-right: 8px;
        font-family: frank-new, sans-serif;
    }

    textarea:focus{
        border: 1.5px solid #5268AA;
        transition: 0.3s;
    }

</style>