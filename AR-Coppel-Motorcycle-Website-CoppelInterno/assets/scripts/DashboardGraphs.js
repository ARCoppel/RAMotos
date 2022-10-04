// Vento Rocketman Sport 250 CC
var ClicksOn512488 = localStorage.getItem('clicksOn512488');
var LocalTimeSpend512488 = localStorage.getItem('TimeOn-512488');
var FloatLocalClicks512488 = +(ClicksOn512488);
var FloatLocalTimeSpend512488 = +(LocalTimeSpend512488);

// Vento Storm 250 CC
var ClicksOn512674 = localStorage.getItem('clicksOn512674');
var LocalTimeSpend512674 = localStorage.getItem('TimeOn-512674');
var FloatLocalClicks512674 = +(ClicksOn512674);
var FloatLocalTimeSpend512674 = +(LocalTimeSpend512674);

// Vento Screamer 250 CC
var ClicksOn513468 = localStorage.getItem('clicksOn513468');
var LocalTimeSpend513468 = localStorage.getItem('TimeOn-513468');
var FloatLocalClicks513468 = +(ClicksOn513468);
var FloatLocalTimeSpend513468 = +(LocalTimeSpend513468);

// Pulsar 200 CC NS
var ClicksOn539599 = localStorage.getItem('clicksOn539599');
var LocalTimeSpend539599 = localStorage.getItem('TimeOn-539599');
var FloatLocalClicks539599 = +(ClicksOn539599);
var FloatLocalTimeSpend539599 = +(LocalTimeSpend539599);

//Total Time Viewing
var TotalTimeView = FloatLocalTimeSpend512488 + FloatLocalTimeSpend512674 + FloatLocalTimeSpend513468 + FloatLocalTimeSpend539599;
TotalTimeView = TotalTimeView.toFixed(2);
document.getElementById("TotalTimeView").innerHTML = TotalTimeView;

// Total Clicks
var TotalClicks = FloatLocalClicks512488 + FloatLocalClicks512674 + FloatLocalClicks513468 + FloatLocalClicks539599;
document.getElementById("TotalClicks").innerHTML = TotalClicks;

// Date
const date = new Date();
document.getElementById("MyDate").innerHTML = date;

// Time spend on each site
const ctx = document.getElementById('timePieChart').getContext('2d');
        const timePieChart = new Chart(ctx, {
            type: 'pie',
            data: {
            labels: ['Vento Rocketman', 'Vento Storm', 'Vento Screamer', 'Pulsar NS'],
            datasets: [{
                label: '# of Votes',
                data: [LocalTimeSpend512488,LocalTimeSpend512674,LocalTimeSpend513468,LocalTimeSpend539599],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 2,
                responsive: true
            }]
        }
    });
//Clicks on each site
const ctx2 = document.getElementById('ClicksPieChart').getContext('2d');
        const ClicksPieChart = new Chart(ctx2, {
            type: 'pie',
            data: {
            labels: ['Vento Rocketman', 'Vento Storm', 'Vento Screamer', 'Pulsar NS'],
            datasets: [{
                label: '# of Votes',
                data: [ClicksOn512488,ClicksOn512674,ClicksOn513468,ClicksOn539599],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 2,
                responsive: true
            }]
        },
        options: {
        }
    });

