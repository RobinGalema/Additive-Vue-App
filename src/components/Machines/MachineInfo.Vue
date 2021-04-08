<template>
    <div class="box machineInfoContainer">
        <div class="data-container">
            <div class="data">
                <h5>Remaining Print Height:</h5>
                <p class="data-text"> {{ values.data.RemainingPrintHeight }} </p>
            </div>
        </div>
        <div class="data-container">
            <div class="data">
                <h5>Oxygen Level:</h5>
                <p class="data-text"> {{ values.data.OxygenLevel }} </p>
            </div>
        </div>
        <div class="data-container">
            <div class="data">
                <h5>Build Plate Temperature:</h5>
                <p class="data-text"> {{ values.data.Temperature }} </p>
            </div>
        </div>
        <div class="data-container">
            <div class="data">
                <h5>Chamber Pressure:</h5>
                <p class="data-text"> {{ values.data.ChamberPressure }} </p>
            </div>
        </div>
        <div class="data-container">
            <div class="data">
                <h5>Chamber Humidity:</h5>
                <p class="data-text"> {{ values.data.ChamberHumidity }} </p>
            </div>
        </div>
        <div class="data-container">
            <div class="data">
                <h5>Container Mass Availibe:</h5>
                <p class="data-text"> {{ values.data.MassAvailible }} </p>
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
                    data: { }
                }
            }
        },

        mounted() {
            // Run the loop function when the component is loaded and mounted in the app, pass the "value" object as data
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

    .machineInfoContainer .data-container h5 {
        font-size: 13px;
        margin-bottom: 5px;
    }

    .machineInfoContainer .data-container p.data-text {
        font-size: 13px;
        color: #a4b0bb;
    }
</style>