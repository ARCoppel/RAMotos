/* SKU: 512488 Vento Rocketman Sport 250 CC 2022
   Script that counts clicks on a specifically object
   and stores the vaules in the browser's local storage.
*/
var clicksOn512488 = localStorage.getItem('clicksOn512488');

if (clicksOn512488 === null) {
    clicksOn512488 = 0;
} else {
    clicksOn512488++;
}

localStorage.setItem("clicksOn512488", clicksOn512488);
