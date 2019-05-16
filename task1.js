var water;
var cals;
function caldr(){
    var h= parseFloat(document.getElementById("h").value);
    var w= parseFloat(document.getElementById("w").value);
    var a= parseFloat(document.getElementById("a").value);
    var m=document.getElementById("male");
    var f=document.getElementById("female");
    var ex=document.getElementById("ex");
    var so=ex.options[ex.selectedIndex].text;

    var tem = (10*w)+(6.25*h)-(5*a);
    var was= w*0.042;

    if (m.checked==true){
        tem=tem+5;
        
    }
    else if (f.checked==true){
        tem=tem-161;
    }
    if (so=="Little"){
        tem=tem*1.2;
        was=was+0.1;
    }
    else if(so=="Light"){
        tem=tem*1.375;
        was=was+0.17;
    }
    else if(so=="Moderate"){
        tem=tem*1.55;
        was=was+0.25;
    }
    else if(so=="Heavy"){
        tem=tem*1.725;
        was=was+0.34;
    }
     water=was.toFixed(2);
     cals=tem.toFixed(2);
    document.getElementById("dr").innerHTML=" Your daily calorie requirment is "+cals+" and water requirment is "+ water;
}

function add(){  
 
    var fo = document.getElementById('food').value;
    var c = document.getElementById('carbs').value;
    var f = document.getElementById('fat').value;
    var p = document.getElementById('protien').value;
    var w = document.getElementById('water').value;

      var t = document.getElementsByTagName('table')[0];

      var newt= t.insertRow(-1);
  
      var cell1 = newt.insertCell(0);
      var cell2 = newt.insertCell(1);
      var cell3 = newt.insertCell(2);
      var cell4 = newt.insertCell(3);
      var cell5 = newt.insertCell(4);
      
      cell1.innerHTML = fo;
      cell2.innerHTML = c;
      cell3.innerHTML = f;
      cell4.innerHTML= p;
      cell5.innerHTML= w;
}
function calwat(){
    var table = document.getElementById("table"), sum = 0 , waa=0;
            
    for(var i = 1; i < table.rows.length; i++)
    {
        for(var j = 1; j < 5 ; j++)
        {
            if (j==1){ sum = sum + (4*parseInt(table.rows[i].cells[j].innerHTML));}
            if (j==2){ sum = sum + (9*parseInt(table.rows[i].cells[j].innerHTML));}
            if (j==3){ sum = sum + (4*parseInt(table.rows[i].cells[j].innerHTML));}
            if (j==4){ waa = waa + (0.001*parseInt(table.rows[i].cells[j].innerHTML));}
           
        }
    }
    var cc=sum.toFixed(2);
     var wc=waa.toFixed(2);
    document.getElementById("val").innerHTML = "Calories consumed is  " + cc+" calories.water consumed is"+wc+" litres";
    if(waa<water){
        alert("Drink more water");

    }
    if (sum>cals){
        alert("You've met the daily requirments already")
    }
}



