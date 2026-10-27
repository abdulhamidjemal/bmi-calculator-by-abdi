var weight= document.getElementById("weight");

var height= document.getElementById("height");

var weight_val= document.getElementById("weight-val");

var height_val= document.getElementById("height-val");



weight.addEventListener("input",calculate);

height.addEventListener("input", calculate);



function calculate(){



    // INCREASING AND DECREASING VALUES IN THE RAMNGE

    var weightt=parseInt(weight.value);

    weight_val.textContent=weightt + " Kg";



    var heightt= parseInt(height.value);

    height_val.textContent=heightt + " cm";





    // BMI CALCULATION

var bmi;

var result= document.getElementById("result");

bmi=(weightt / Math.pow((heightt/100),2)).toFixed(1);

result.textContent= bmi;





// CATEGORY

document.getElementById("category").textContent=category;

if(bmi < 18.5){

    category= "Underweight";

    result.style.color="red"

}



else if(bmi >=18.5 && bmi <=24.9){

    category="Normal Body Weight";

    result.style.color="#0be881"

}



else if(bmi >=25 && bmi<=29.9){

    category= "Overweight";

    result.style.color="#ff884d"

    



}

else{

    category="Obese";

    result.style.color="#ff5e57";

}



}
