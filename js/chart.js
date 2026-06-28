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

let jenisChart;

function drawJenisChart(labels, data) {

  if (jenisChart) jenisChart.destroy();

  jenisChart = new Chart(
    document.getElementById("jenisChart"),
    {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Jenis Rekod",
          data: data
        }]
      }
    }
  );
}

let peringkatChart;

function drawPeringkatChart(labels, data) {

  if (peringkatChart) peringkatChart.destroy();

  peringkatChart = new Chart(
    document.getElementById("peringkatChart"),
    {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Peringkat",
          data: data
        }]
      }
    }
  );
}


