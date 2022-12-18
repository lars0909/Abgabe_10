const eingabe = document.querySelector('#input-field') as HTMLInputElement;
const enter = document.querySelector("#enter") as HTMLButtonElement;
var inhalt:string ="";

eingabe.addEventListener('input', function() {
  console.log(eingabe.value);
})

enter.addEventListener("click", function(){
    console.log("enter");
    inhalt = eingabe.value;
    eingabe.value = "";
    console.log(inhalt);
    
})

