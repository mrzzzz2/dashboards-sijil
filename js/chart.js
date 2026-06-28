function drawKelasChart(labels,data){

new Chart(

document.getElementById("kelasChart"),

{

type:"bar",

data:{

labels:labels,

datasets:[{

label:"Bilangan",

data:data

}]

}

});

}