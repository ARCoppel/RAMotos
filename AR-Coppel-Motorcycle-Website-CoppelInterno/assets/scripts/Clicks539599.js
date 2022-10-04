/* SKU: 539599 Pulsar 200 NS 2022
   Script that counts clicks on a specifically object
   and stores the vaules in the browser's local storage.
*/
var clicksOn539599 = localStorage.getItem('clicksOn539599');

if (clicksOn539599 === null) {
    clicksOn539599 = 0;
} else {
    clicksOn539599++;
}

localStorage.setItem("clicksOn539599", clicksOn539599);
