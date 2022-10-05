// chart defaults for lesser code elsewere
export const chartBase = (Chart) => {
    Chart.defaults.responsive = true
    Chart.defaults.aspectRatio = 1
    //Chart.defaults.maintainAspectRatio = false

    Chart.defaults.scale.grid.drawBorder = false
    Chart.defaults.plugins.legend.align = 'center'
    Chart.defaults.plugins.legend.position = 'bottom'

}
export const colors = {
    backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102,255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
    ],
    borderColor: [
        'rgba(250, 99, 132, 0.2)',
        'rgba(50, 162, 235, 0.2)',
        'rgba(250, 206, 86, 0.2)',
        'rgba(70, 192, 192, 0.2)',
        'rgba(150, 102,255, 0.2)',
        'rgba(250, 159, 64, 0.2)'
    ],
    borderWidth: 1,
};
// Tips: https://www.chartjs.org/docs/latest/general/performance.html