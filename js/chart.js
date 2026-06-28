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

let kelasChart;

function drawKelasChart(labels, values, rawData) {

  if (kelasChart) kelasChart.destroy();

  kelasChart = new Chart(
    document.getElementById("kelasChart"),
    {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Kelas",
          data: values
        }]
      },
      options: {
        onClick: function(evt, elements) {

          if (elements.length > 0) {

            const index = elements[0].index;
            const kelas = labels[index];

            const filtered = rawData.filter(d => d.kelas === kelas);

            renderList(filtered);
          }
        }
      }
    }
  );
}
