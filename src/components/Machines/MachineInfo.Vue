<template>
    <div class="box machineInfoContainer">
        <div class="data-container">
            <div class="data">
                <h3>Remaining Print Height:</h3>
                <p class="data-text"> {{ values.data.RemainingPrintHeight }} </p>
            </div>
        </div>
        <div class="data-container">
            <div class="data">
                <h3>Remaining Print Height:</h3>
                <p class="data-text"> {{ values.data.RemainingPrintHeight }} </p>
            </div>
        </div>
        <div class="data-container">
            <div class="data">
                <h3>Remaining Print Height:</h3>
                <p class="data-text"> {{ values.data.RemainingPrintHeight }} </p>
            </div>
        </div>
        <div class="data-container">
            <div class="data">
                <h3>Remaining Print Height:</h3>
                <p class="data-text"> {{ values.data.RemainingPrintHeight }} </p>
            </div>
        </div>
        <div class="data-container">
            <div class="data">
                <h3>Remaining Print Height:</h3>
                <p class="data-text"> {{ values.data.RemainingPrintHeight }} </p>
            </div>
        </div>
        <div class="data-container">
            <div class="data">
                <h3>Remaining Print Height:</h3>
                <p class="data-text"> {{ values.data.RemainingPrintHeight }} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import LoopTime from '../../data.js' // <-- Import loop function from JS file

    export default {
        name: 'MachineInfo',

        data() {
            return {
                // Setup the data object
                values: {
                    data: {
                        RemainingPrintHeight: ""
                    }
                }
            }
        },

        mounted() {
            // Run the loop function when the component is loaded and mounted in the app
            LoopTime(this.values);
        }

    }
</script>

<style scoped>
    .machineInfoContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .machineInfoContainer .data-container {
        flex-basis: 30%;
        max-width: 30%;
    }

    .machineInfoContainer .data-container .data {
        padding: 5px;
        text-align: center;
    }

    .machineInfoContainer .data-container h3 {
        font-size: 13px;
    }

    .machineInfoContainer .data-container p.data-text {
        font-size: 13px;
        color: #a4b0bb;
    }
</style>