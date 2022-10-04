/* SKU: 513468 Vento Screamer 250 CC 2022
   Script that counts time viewing a specifically object
   and stores the vaules in the browser's local storage.
*/
TimeMe.initialize({
    currentPageName: "513468.html"
});

window.onload = function() {
    setInterval( function() {
        window.onbeforeunload = function(event) {
            var LocalTimeSpend513468 = localStorage.getItem('TimeOn-513468');
            var FloatLocalTimeSpend513468 = +(LocalTimeSpend513468);

            if(FloatLocalTimeSpend513468 === null) {
                FloatLocalTimeSpend513468 = 0;
            } else {
                FloatLocalTimeSpend513468 += timeSpentOnPage;
                localStorage.setItem("TimeOn-513468", FloatLocalTimeSpend513468);
            }
        }
        var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
        console.log(timeSpentOnPage);
    }, 37);

}