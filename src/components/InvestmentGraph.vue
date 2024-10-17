<template>
    <div class="investment">
        <div class="totalEarnings">
            <p>Último Año </p>
             <span :class="percentageClass">({{ percentage > 0 ? '+' : '-'}}{{ percentage }}%)</span>
        </div>
        <v-sheet color="rgba(0, 0, 0, 0)">
            <v-sparkline
            :model-value="chartData"
            color="#39288E"
            height="100"
            padding="24"
            stroke-linecap="round"
            smooth
            auto-draw
            >
            <template v-slot:label="item"></template>
            </v-sparkline>
        </v-sheet>
        <div class="dateLabels">
            <span v-for="month in months" :key="month" class="date">{{ month }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            chartData: [100, 120, 150, 130, 160, 170, 200, 210, 190, 220, 250, 300],
            months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            percentage: 2.78
            };
        },
        /* props: {
            percentage: {
            type: Number,
            required: true
            }
        }, */
        computed: {
            percentageClass() {
            return this.percentage > 0 ? 'positive' : 'negative';
        }
  }
    };
</script>

<style scoped>
    .investment {
        margin: 10px 0px;
    }

    .totalEarnings {
        display: block;
    }

    .dateLabels {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
    }

    .date {
        flex: 1;
        text-align: center;
        font-size: 14px;
    }

    .totalEarnings {
        display: flex;
        align-items: center;
    }

    span {
        margin-left: 5px;
    }

    .positive {
        color: green;
    }

    .negative {
        color: red;
    }
</style>
