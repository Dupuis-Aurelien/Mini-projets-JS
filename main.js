/* h1 and h2 Events */

/* Sélector */
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

/* function color */
let colorRed = function() {
    this.style.color = "red";
}
let colorBlue = function() {
    this.style.color = "blue";
}

/* h1 */
h1.addEventListener('mouseover', colorRed);
h1.addEventListener('mouseout', colorBlue);

/* h2 */
h2.addEventListener('click', colorBlue);