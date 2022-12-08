

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