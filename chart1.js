var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Direct', 'Email', 'Ad Networks', 'Video Ads'],
        datasets: [{
            label: 'Source',
            data: [22, 12, 8, 6],
            backgroundColor: [
                'rgba(23, 132, 11,1)',
                'rgba(75, 0, 252,1)',
                'rgba(126, 0, 127,1)',
                'rgba(235, 117, 237,1)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});