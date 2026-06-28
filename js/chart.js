function drawKelasChart(labels, values, rawData) {

  if (window.kelasChart) window.kelasChart.destroy();

  window.kelasChart = new Chart(
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

          if (!elements.length) return;

          const index = elements[0].index;
          const selectedKelas = labels[index];

          const filtered = filterByKelas(rawData, selectedKelas);

          renderList(filtered);
        }
      }
    }
  );
}

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


