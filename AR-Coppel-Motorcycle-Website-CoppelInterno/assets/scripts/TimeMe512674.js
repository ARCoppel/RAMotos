/* SKU: 512674 Vento Storm 250 CC 2022
   Script that counts time viewing a specifically object
   and stores the vaules in the browser's local storage.
*/
TimeMe.initialize({
    currentPageName: "512674.html"
});

window.onload = function() {
    setInterval( function() {
        window.onbeforeunload = function(event) {
            var LocalTimeSpend512674 = localStorage.getItem('TimeOn-512674');
            var FloatLocalTimeSpend512674 = +(LocalTimeSpend512674);

            if(FloatLocalTimeSpend512674 === null) {
                FloatLocalTimeSpend512674 = 0;
            } else {
                FloatLocalTimeSpend512674 += timeSpentOnPage;
                localStorage.setItem("TimeOn-512674", FloatLocalTimeSpend512674);
            }
        }
        var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
        console.log(timeSpentOnPage);
    }, 37);

}