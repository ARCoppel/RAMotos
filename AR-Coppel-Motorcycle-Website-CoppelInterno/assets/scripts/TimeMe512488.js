/* SKU: 512488 Vento Rocketman Sport 250 CC 2022
   Script that counts time viewing a specifically object
   and stores the vaules in the browser's local storage.
*/
TimeMe.initialize({
    currentPageName: "512488.html"
});

window.onload = function() {
    setInterval( function() {
        window.onbeforeunload = function(event) {
            var LocalTimeSpend512488 = localStorage.getItem('TimeOn-512488');
            var FloatLocalTimeSpend512488 = +(LocalTimeSpend512488);

            if(FloatLocalTimeSpend512488 === null) {
                FloatLocalTimeSpend512488 = 0;
            } else {
                FloatLocalTimeSpend512488 += timeSpentOnPage;
                localStorage.setItem("TimeOn-512488", FloatLocalTimeSpend512488);
            }
        }
        var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
        console.log(timeSpentOnPage);
    }, 37);

}