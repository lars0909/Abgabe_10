const eingabe = document.querySelector('#input-field');
const enter = document.querySelector("#enter");
var inhalt = "";
eingabe.addEventListener('input', function () {
    console.log(eingabe.value);
});
enter.addEventListener("click", function () {
    console.log("enter");
    inhalt = eingabe.value;
    eingabe.value = "";
    console.log(inhalt);
});
//# sourceMappingURL=script.js.map