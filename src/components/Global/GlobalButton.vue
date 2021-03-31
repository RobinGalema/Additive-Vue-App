<template>
    <button @click="onClick()" :class="['btn', version]" :style="{ width: width }">{{ text }}</button>
</template>

<script>
    export default {
        name: 'GlobalButton',
        props: {
            text: String,
            version: String,
            width: String
        },
        methods: {
            onClick() {
                console.log('click');
            }
        }
    }
</script>

<style>
.btn {
    display: inline-block;
    background: #151539;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
}

.primary {
    background: #151539;
    color: #ffffff;
}

.secondary {
    background: #F8F8F8;
    border: 2px solid #151539;
    border-radius: 5px;
    color: #151539;
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