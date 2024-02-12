import * as echarts from 'echarts';
import 'echarts-gl';
import option_one from "./modules/chart_one";
import option_two from "./modules/chart_two";

let chart_one = echarts.init(document.getElementById('container_chart_one'))
let chart_two = echarts.init(document.getElementById('container_chart_two'))
chart_one.setOption(option_one)
chart_two.setOption(option_two)

let button_one = document.getElementsByClassName('button_one')
let button_two =    document.getElementsByClassName('button_two')

let chart_1 = document.getElementsByClassName('hero_chart__one')
let chart_2 = document.getElementsByClassName('hero_chart__two')

let show = true

console.log(chart_1)

button_one[0].onclick = function () {
    button_two[0].setAttribute('class', 'button_two')
    button_one[0].setAttribute('class', 'button_one activity')
    chart_2[0].style.display = 'none'
    chart_1[0].style.display = 'block'
}

button_two[0].onclick = function () {
    button_one[0].setAttribute('class', 'button_one')
    button_two[0].setAttribute('class', 'button_two activity')
    chart_1[0].style.display = 'none'
    chart_2[0].style.display = 'block'
}

