

function useNasStyle() {

document.getElementById("styleToUse").href = "style.css";
currentMode=1;
}

function useBasicStyle() {

  document.getElementById("styleToUse").href = "simpleStyle.css";
  currentMode=0;
}

function toggleTheStyle(){

console.log("switching style");

if (currentMode>0)
{
useBasicStyle();

}
else {
useNasStyle();
}

console.log(currentMode);
}


let showDetails=()=>{

document.getElementById("details").style.display="block";


}

let hideDetails=()=>{

  document.getElementById("details").style.display="none";
  
  
  }

let revealClicked=()=>{

  if(document.getElementById("reveal").innerHTML=="Show Details")
  {
    document.getElementById("reveal").innerHTML="Hide Details";
    showDetails();
  }

  else{
    document.getElementById("reveal").innerHTML="Show Details";
    hideDetails();
  }
}