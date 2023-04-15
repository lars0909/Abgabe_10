const eingabe = document.querySelector('#input-field') as HTMLInputElement;
const enter = document.querySelector("#enter") as HTMLButtonElement;
var inhalt:string ="";
let count: number = 0;

eingabe.addEventListener('input', function() {
  console.log(eingabe.value);
})


enter.addEventListener("click", function(){
    console.log("enter");
    inhalt = eingabe.value;
    newtask();
    eingabe.value = "";
    count += 1;
    console.log(count);
    zähler();
})

function newtask(): void{
  let li: HTMLLIElement = document.createElement("li");
  li.className = "notcompleted";
  li.addEventListener("click", function(){
    abhaken(li);
  })
  let text: HTMLLabelElement = document.createElement("label");
  text.innerHTML = inhalt;
  let raus: HTMLButtonElement = document.createElement("button");   
  raus.className = "style";       //fas fa trash ging irgendwie nicht  
  raus.addEventListener("click", function(){
    vernichten(li); 
  })

  document.getElementById("list").appendChild(li);
  li.appendChild(text);
  li.appendChild(raus);
}

function zähler():void{
  document.getElementById("zähler").innerText = count + ": musst du noch machen";
}
function abhaken(li: HTMLLIElement){
  if (li.classList.contains("notcompleted")){
    li.classList.remove("notcompleted")
    li.classList.add("completed")
  }
  else{
    li.classList.remove("completed")
    li.classList.add("notcompleted")
  }
}
function vernnichten(li: HTMLLIElement):void{
  count--;
  zähler(); 
  li.remove();         //danke openai
}