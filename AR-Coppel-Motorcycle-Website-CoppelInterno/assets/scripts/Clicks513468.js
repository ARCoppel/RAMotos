/* SKU: 513468 Vento Screamer 250 CC 2022
   Script that counts clicks on a specifically object
   and stores the vaules in the browser's local storage.
*/
var clicksOn513468 = localStorage.getItem('clicksOn513468');

if (clicksOn513468 === null) {
    clicksOn513468 = 0;
} else {
    clicksOn513468++;
}

localStorage.setItem("clicksOn513468", clicksOn513468);
