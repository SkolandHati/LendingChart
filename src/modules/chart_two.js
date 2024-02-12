let parts = [
    [150, 120],
    [590, 110],
]

let series = ['ФАКТ', 'ПЛАН'].map((name, sid) => {
    return {
        name,
        type: 'bar',
        stack: 'total',
        data: parts[sid].map((item, index) => {return item})
    };
});

const option = {
    color: [
        '#0077F7',
        '#13D6FF',
    ],
    tooltip: {
        enabled: false,
        intersect: false,
        backgroundColor: '#1b1b1e'
    },
    xAxis: {
        type: 'value',
        max: 1100
    },
    yAxis: {
        type: 'category',
        data: ['Факт', 'План'],
    },
    series
}

export default option