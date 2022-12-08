var items=[];


function calcAnnualCost(){

  
  itemKiloWatts=document.getElementById("watts").value/1000;
  costPerKWHr=document.getElementById("unitCostPerKWHr").value;
  dailyUsage=document.getElementById("hrsPerDay").value;

  totalAnnualCost=itemKiloWatts*costPerKWHr*dailyUsage*365;


document.getElementById("annualCost").innerHTML=totalAnnualCost;
document.getElementById("monthlyCost").innerHTML=(totalAnnualCost/12).toFixed(2);
  

}

function areYouListening(){

  console.log("i am");
  
}

function addItemToList(){

  itemAdding=document.getElementById("itemName").value;
annualCost=document.getElementById("annualCost").innerHTML=totalAnnualCost;

element=[itemAdding,annualCost];
  items.push(element);
  addToTable();
}

function clearList(){

  items=[];
  addToTable();
}

function clearItem(itemToClear){

  items.splice(itemToClear, 1);
  addToTable();
}



function addToTable(){

  document.getElementById("details").innerHTML="";
  
  totalRunningAmount=0;

for (var i=0;i<items.length;i++)

{totalRunningAmount=totalRunningAmount+parseFloat(items[i][1]);

  electricalItem=document.createElement("span");
  electricalItem.innerHTML=i+")"+items[i][0];
  document.getElementById("details").append(electricalItem);


  electricalItemCost=document.createElement("span");
  electricalItemCost.innerHTML=":£"+(items[i][1]).toFixed(2)+"/year £"+(items[i][1]/12).toFixed(2)+"pcm";
  document.getElementById("details").append(electricalItemCost);


  breakLine=document.createElement("br");
 
  document.getElementById("details").append(breakLine);

}

totalAmountCost=document.createElement("div");
totalAmountCost.innerHTML="Total Amount:£"+totalRunningAmount+"/year £"+(totalRunningAmount/12).toFixed(2)+"pcm";
  document.getElementById("details").append(totalAmountCost);



  showDetails();

}


// function tableCreate() {
//   const body = document.getElementById("details");

//         tbl = document.createElement('table');
//   tbl.style.width = '100px';
//   tbl.style.border = '1px solid black';

//   for (let i = 0; i < 3; i++) {
//     const tr = tbl.insertRow();
    
//     for (let j = 0; j < 2; j++) {
      
//       itemToUse=testItems[j][0];

//         const td = tr.insertCell();
// //        td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
//         td.appendChild(document.createTextNode(itemToUse));
//         td.style.border = '1px solid black';
      
        
//     }
//   }
//   body.appendChild(tbl);
//   showDetails();

// }


// function tableCreate() {
//   const body = document.getElementById("details");

//         tbl = document.createElement('table');
//   tbl.style.width = '100px';
//   tbl.style.border = '1px solid black';

//   for (let i = 0; i < 3; i++) {
//     const tr = tbl.insertRow();
//     const td = tr.insertCell();
//     const tdNext = tr.insertCell();
//         td.appendChild(document.createTextNode(testItems[i]));
//         tr.appendChild(document.createTextNode(testItems[i]));
//         td.style.border = '1px solid black';
      
        
    
//   }
//   body.appendChild(tbl);
//   showDetails();

// }