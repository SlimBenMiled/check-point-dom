





function increase(qty,prix,ctn){
let inp=document.getElementById(qty);
let val = parseInt(inp.value);
val++
inp.value=val;
let price =document.getElementById(prix);
price.innerHTML =ctn*val;
}


function decrease(qty,prix,ctn){
    let inp=document.getElementById(qty);
    let val = parseInt(inp.value);
    if (val>0){
    val-- ;
    inp.value=val;
    }
    let price =document.getElementById(prix);
    if(val>0){
price.innerHTML =ctn*val; }
else {
    price.innerHTML =ctn;
}
}


function total(x,y){
    var x=0;
    var y=0;
    Input.value=x+y;
    
}