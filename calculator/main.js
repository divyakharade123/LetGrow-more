function getInputValue(){
    let input = event.target.innerText
    console.log(input);
    printValue(input);
}

 


after that, we need to add the onclick() event to every button, of course we can add it manually in our HTML file but it will be too long so let's do it programmatically using JavaScript. for this, we will get the button by their tag name and then we will use a loop to add to each button the onclick attribute like this.
let buttons = document.getElementsByTagName('button');
console.log(buttons.length);
for(var i =0; i<buttons.length;i++){
    buttons[i].setAttribute('onclick','getInputValue()');
}


function printValue(val){
  let out = document.querySelector("#result");
  let current = out.innerHTML;
  if(out.innerHTML == "0"){
    
    if(val!= "C" && val!="DEL"){ 
      out.innerHTML ="";
      out.innerHTML += val;
    }
  }
  else{
    if(val == "DEL" ){
      console.log(current[current.length-1]);
      out.innerText = current.slice(0,-1);
      if(out.innerHTML.length <= 1){
        out.innerHTML = "0";
      }
    }
    if(val!= "C" && val!="DEL" && val!="="){ 
      out.innerHTML += val;
    }
    if(val =="="){
      let res = out.innerHTML;
      out.innerHTML = eval(res);
    }
    if(val == "C"){
      out.innerHTML = "0";
    }
  }
  
}

