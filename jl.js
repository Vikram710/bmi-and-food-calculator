var water_final;
var calorie_final;
document.getElementById("submit").addEventListener("click",calculate_daily_calorie);
document.getElementById("submit").addEventListener("click",function(event){
    calculate_daily_calorie();
    event.preventDefault();
});

function calculate_daily_calorie(){
    //input
    var height= parseFloat(document.getElementById("height").value);
    var weight= parseFloat(document.getElementById("weight").value);
    var age= parseFloat(document.getElementById("age").value);
    var male=document.getElementById("male");
    var female=document.getElementById("female");
    var excercise=document.getElementById("excercise");
    var selected_excercise=excercise.options[excercise.selectedIndex].text;
    //common calculations
    var temp_calorie = (10*weight)+(6.25*height)-(5*age);
    var temp_water= weight*0.042;
    //specific calculations (sex based)
    if (male.checked==true){
        temp_calorie=temp_calorie+5;
    }
    else if (female.checked==true){
        temp_calorie=temp_calorie-161;
    }
      //specific calculations (exercise level based)
    switch(selected_excercise){
        case "Little":
        temp_calorie=temp_calorie*1.2;
        temp_water=temp_water+0.1;
        break;
        case "Light":
        temp_calorie=temp_calorie*1.375;
        temp_water=temp_water+0.17;
        break;
        case "Moderate":
        temp_calorie=temp_calorie*1.55;
        temp_water=temp_water+0.25;
        break;
        case "Heavy":
        temp_calorie=temp_calorie*1.725;
        temp_water=temp_water+0.34;
        break;
    }
    //round off to 2 decimal places 
     water_final=temp_water.toFixed(2);
     calorie_final=temp_calorie.toFixed(2);
     //output
    if (height.checkValidity && Weight.checkValidity && age.checkValidity && water_final>0 && calorie_final>0){
     document.getElementById("calorie_result_para").innerHTML=`Your daily calorie requirment is  ${calorie_final} 
     your daily water requirment is  ${water_final}`;}
     else{
        alert("invalid Entry");
     }
     
     

   
}

function add(){  
 
    var food = document.getElementById('food').value;
    var carbs = document.getElementById('carbs').value;
    var fat = document.getElementById('fat').value;
    var protien = document.getElementById('protien').value;
    var water= document.getElementById('water').value;

      var table = document.getElementsByTagName('table')[0];

      var new_table= table.insertRow(-1);
  
      var cell1 = new_table.insertCell(0);
      var cell2 = new_table.insertCell(1);
      var cell3 = new_table.insertCell(2);
      var cell4 = new_table.insertCell(3);
      var cell5 = new_table.insertCell(4);
      
      cell1.innerHTML = food;
      cell2.innerHTML = carbs;
      cell3.innerHTML = fat;
      cell4.innerHTML= protien;
      cell5.innerHTML= water;
}
function calwat(){
    
    var table = document.getElementById("table"), calorie_sum = 0 , water_sum=0;
    //calorie and water calculations
    for(var i = 1; i < table.rows.length; i++)
    {
        for(var j = 1; j < 5 ; j++)
        {
            switch(j){
                case 1:
                calorie_sum =  calorie_sum+ (4*parseFloat(table.rows[i].cells[j].innerHTML));
                break;
                case 2:
                calorie_sum = calorie_sum + (9*parseFloat(table.rows[i].cells[j].innerHTML));
                break;
                case 3:
                calorie_sum =calorie_sum + (4*parseFloat(table.rows[i].cells[j].innerHTML));
                break;
                case 4:
                water_sum = water_sum + (0.001*parseFloat(table.rows[i].cells[j].innerHTML));
                break;
            }
            
        }
    }
    // round off
    var calorie_consumed=calorie_sum.toFixed(2);
     var water_consumed=water_sum.toFixed(2);
     //output
    document.getElementById("consumed").innerHTML = `Calories consumed is  ${calorie_consumed} calories.
     Water consumed is ${water_consumed} litres`;
     //alert messages
    if(water_consumed<water_final){
        alert("Drink more water");

    }
    if (calorie_sum>calorie_final){ 
        alert("You've met the daily requirments already")
    }
}
