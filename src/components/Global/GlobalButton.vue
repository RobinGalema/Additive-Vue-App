<template>
    <form :action="link" method="get">
        <button @click="onClick()" type="submit" :class="['btn', version]" :style="{ width: width }">{{ text }} <img src="../../assets/icons/edit-3.svg" /></button>
    </form>
</template>

<script>
    export default {
        name: 'GlobalButton',
        props: {
            text: String,
            version: String,
            width: String,
            picture_src: String,
            link: String,
        },
        methods: {
            onClick() {
                console.log('click');
            }
        }
    }
</script>

<style scoped>
.btn {
    display: inline-block;
    background: #151539;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
}

img{
    display: none;
    filter: invert(100%);
    
}

.primary {
    background: #151539;
    color: #ffffff;
}

.secondary {
    background: #fff;
    box-shadow: 0px 0px 10px #00000029;
    border-radius: 5px;
    color: #151539;
}

.homeScreenButton{
    border-radius: 10pt;
    background-color: #F8F8F8;
    box-shadow: 0 0 10pt #00000029;
    padding: 8px;
    color: #ffffff;
    font-weight: bold;
    background-color: #506ED5;
    height: 100%;
    margin: 0;
}

.homeScreenButton img{ /* icon is alleen zichtbaar wanneer de homeScreenButton class actief is */
    display: block;
    margin: 0 auto;
    padding-top: 6px;
}

.btn:focus {
    outline: none;
}

.btn:active {
    transform: scale(0.98);
}

.btn-block {
    display: block;
    width: 100%;
}
</style>