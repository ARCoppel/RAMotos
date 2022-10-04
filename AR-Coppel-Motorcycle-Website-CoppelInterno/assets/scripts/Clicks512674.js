/* SKU: 512674 Vento Storm 250 CC 2022
   Script that counts clicks on a specifically object
   and stores the vaules in the browser's local storage.
*/
var clicksOn512674 = localStorage.getItem('clicksOn512674');

if (clicksOn512674 === null) {
    clicksOn512674 = 0;
} else {
    clicksOn512674++;
}

localStorage.setItem("clicksOn512674", clicksOn512674);
