<template>
    <label class="switch">
    <input type="checkbox">
    <span class="slider"></span>
    </label>
</template>

<script>
    export default {
        name: 'ToggleButton',
        props: {
            text: String,
        },
        methods: {
            onClick() {
                console.log('click');
            }
        }
    }
</script>

<style>
.switch {
    position: relative;
    display: block;
    width: 50px;
    height: 20px;
}

/* Hides checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #B5B5B5;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 0;
    bottom: -3px;
    background-color: white;
    box-shadow: 0px 0px 3px 1px #B5B5B5;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider {
  background-color: #5268aa;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>