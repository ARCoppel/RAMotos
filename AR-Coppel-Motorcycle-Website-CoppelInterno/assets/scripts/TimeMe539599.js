/* SKU: 539599 Pulsar 200 NS 2022
   Script that counts time viewing a specifically object
   and stores the vaules in the browser's local storage.
*/
TimeMe.initialize({
    currentPageName: "539599.html"
});

window.onload = function() {
    setInterval( function() {
        window.onbeforeunload = function(event) {
            var LocalTimeSpend539599 = localStorage.getItem('TimeOn-539599');
            var FloatLocalTimeSpend539599 = +(LocalTimeSpend539599);

            if(FloatLocalTimeSpend539599 === null) {
                FloatLocalTimeSpend539599 = 0;
            } else {
                FloatLocalTimeSpend539599 += timeSpentOnPage;
                localStorage.setItem("TimeOn-539599", FloatLocalTimeSpend539599);
            }
        }
        var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
        console.log(timeSpentOnPage);
    }, 37);

}