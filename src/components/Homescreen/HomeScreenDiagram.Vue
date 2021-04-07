<template>
    <div class="cardBackground">
        <div class="donutDiagram">
            <svg  height="160" width="160" viewBox="0 0 160 160" class="donut-chart">
                <template v-for="(value, index) in donutData">
                    <circle :cx="cx" :cy="cy" :r="radius" :stroke="colors[index]" :stroke-width="cirkelDikte" :stroke-dasharray="adjustedCircumference" :stroke-dashoffset="calculateStrokeDashOffset(value, circumference)" fill="transparent" :transform="returnCircleTransformValue(index)" />
                    <text :transform="returnTextTransformValue(index)" >{{ donutData[index] }}</text>
                </template>
            </svg>
            <div class="jobs">{{jobsTotaal}} Jobs</div>
         </div>
         <div class="legenda">
             <div class="kleur"><div class="active"></div> <p>Active</p></div>
             <div class="kleur"> <div class="queed"></div> <p>Queed</p></div>
             <div class="kleur"><div class="completed"></div> <p>Completed</p></div>
         </div>
    </div>
</template>

<script>

export default{
    name: "donut diagram",
    props:{
        Active: Number,
        Queed: Number,
        Completed: Number,
    },
    data() {
    return {
      colors: ["#506ED5","#EB6060", "#4EDB90"], //volgorde: active, queed, completed
      Active: 20,
      Queed: 30,
      Completed: 20,
      jobsTotaal: 0,
      donutData: [9, 4, 6], //volgorde: active, queed, completed
      cx: 80,
      cy: 80,
      cirkelDikte: 15, //dikte van de cirkel diagram
      radius: 60,
      angleOffset: 0,
      chartData: [],
    }
  },
  computed: {
    // zorgt voor de lege ruimte tussen de waardes. Staat nu op 0 omdat er geen behoefte is aan lege ruimte.
    adjustedCircumference() {
      return this.circumference - 0
    },
    circumference() {
      return 2 * Math.PI * this.radius
    },
    dataTotal() {
      return this.donutData.reduce((acc, val) => acc + val)
    },
    //Percentage berekenen
    calculateChartData() {
      this.donutData.forEach((dataVal, index) => {
        let { x, y } = this.calculateTextCoords(dataVal, this.angleOffset)
        // start at -90deg so that the largest segment is perpendicular to top
        let data = {
          degrees: index === 0 ? -90 : this.angleOffset - 90,
          textX: x,
          textY: y
        }
        this.chartData.push(data)
        this.angleOffset = this.dataPercentage(dataVal) * 360 + this.angleOffset
      })
    },
    sortInitialValues() {
      return this.donutData.reduce((acc, item) => acc + item, 0);
    }
  },
  methods: {
    calculateStrokeDashOffset(dataVal, circumference) {
      const strokeDiff = this.dataPercentage(dataVal) * circumference
      return circumference - strokeDiff
    },
    calculateTextCoords(dataVal, angleOffset) {
      // t must be radians
      // x(t) = r cos(t) + j
      // y(t) = r sin(t) + j

      // subtract 90 since we're also rotating the circle segments
      let angle = (((this.dataPercentage(dataVal) * 360) / 2) - 90) + angleOffset
      let radians = this.degreesToRadians(angle)

      let textCoords = {
        x: (this.radius * Math.cos(radians) + this.cx) - (this.cirkelDikte / 4),
        y: (this.radius * Math.sin(radians) + this.cy) + (this.cirkelDikte / 4)
      }
      return textCoords
    },
    degreesToRadians(angle) {
      return angle * (Math.PI / 180)
    },
    dataPercentage(dataVal) {
      return dataVal / this.dataTotal
    },
    percentageString(dataVal) {
      return `${Math.round(this.dataPercentage(dataVal) * 100)}%`
    },
    returnCircleTransformValue(index) {
      return `rotate(${this.chartData[index].degrees}, ${this.cx}, ${this.cy})`
    },
    returnTextTransformValue(index) {
      return `translate(${this.chartData[index].textX}, ${this.chartData[index].textY})`
    },
  },
  beforeMount() {
    this.sortInitialValues
    this.calculateChartData
    //totale jobs berekenen
    this.jobsTotaal = this.donutData.reduce((acc, item) => acc + item, 0);
  }
}



  
</script>

<style scoped>

    .cardBackground{
        border-radius: 10pt;
        background-color: #F8F8F8;
        box-shadow: 0 0 10pt #00000029;
        margin: 5px;
        padding-top: 8px;
        padding-bottom: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    text{
        font-size: 12px;
        fill: white;
    }
  
    .donutDiagram{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: -2px;
    }

    .jobs{
        position: absolute;
        font-weight: bold;
    }

    .kleur{
        display: flex;
        align-items:center;
    }

    p{
        margin: 4px;
        font-size: 14px;
    }

    .active{
        width: 12px;
        height: 12px;
        background-color: #506ED5;
        margin-right: 6px;
    }

    .queed{
        width: 12px;
        height: 12px;
        background-color: #EB6060;
        margin-right: 6px;
    }

    .completed{
        width: 12px;
        height: 12px;
        background-color: #4EDB90; 
        margin-right: 6px;
    }

</style>