import * as echarts from 'echarts';
import 'echarts-gl';

const parts = [
    [70, 180, 70, 25, 100, 170, 195, 140, 120, 80, 120, 170],
    [90, 190, 105, 90, 60, 100, 220, 45, 20, 100, 100, 100],
    [140, 30, 25, 80, 120, 130, 85, 50, 30, 70, 140, 130],
]

const data = [12, 34, 45, 115, 180]

const series = ['forTheMeat', 'ExpensesForThePO', 'Other'].map((name, sid) => {
    return {
        name,
        type: 'bar',
        stack: 'total',
        data: parts[sid].map((item, index) => {return item})
    };
});

const calculator = (function () {
    let res = [];
    for (let i = 0; i < parts[0].length; i++) {
        let sum = 0
        for (let j = 0; j < parts.length; j++)
        sum += parts[j][i]
        res.push(sum)
        sum = 0
    }
    return res;
})();

console.log(calculator)

series.push(Object({
    name: 'Dynamic Line',
    type: 'line',
    smooth: 0.5,
    symbol: 'none',
    data: calculator.map(i => i / 1.5),
    lineStyle: {
        color: '#C6EC92',
        width: 2
    },
    markLine: {
        symbol: ['none', 'none'],
        label: { show: false },
    },
}))

let chart = echarts.init(document.getElementById('container_chart'))
chart.setOption({
    color: [
        '#9747FF',
        '#0077F7',
        '#13D6FF',
    ],
    xAxis: {
        type: 'category',
        data: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    },
    yAxis: {
        type: 'value'
    },
    series
})