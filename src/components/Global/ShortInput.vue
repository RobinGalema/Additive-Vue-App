<template>
    <!-- Component: <ShortInput inputTitle="Title" inputPlaceholder="Placeholder" />  -->
    <div class="shortInput">
        <div class="title">{{inputTitle}}</div>
        <input type="text" v-model="inputText" name="inputText" :placeholder="`${inputPlaceholder}`" /> <!-- v-model="inputText" zorgt ervoor dat de input gelinkt is met de prop > text -->
        
    </div>

</template>

<script>
export default {
    name: "ShortInput",
    props:{
        inputTitle: String, 
        inputPlaceholder: String,
    },
    data(){
        return{
            inputText: "", //hierin wordt de content van de input opgeslagen
        }
    }
}
</script>

<style scoped>

    .shortInput{
        margin-top: 8px;
        margin-bottom: 8px;
    }

    input{
        height: 42px;
        background: #F2F2F2;
        border: 1.5px solid #F2F2F2;
        border-radius: 5px;
        padding-left: 8px;
        padding-right: 8px;
        outline: none;
        width: 100%;
        margin-top: 8px;
        margin-right: 8px;
        font-family: frank-new, sans-serif;
    }

    input:focus{
        border: 1.5px solid #5268AA;
        transition: 0.3s;
    }



</style>