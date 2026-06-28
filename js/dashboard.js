async function initDashboard() {

  const data = await fetchData();

  console.log("DATA:", data);

  document.getElementById("jumlahRekod").innerHTML = data.length;

  // 👉 check kelas
  const kelasCount = countByField(data, "kelas");

  console.log("KELAS COUNT:", kelasCount);

  const labels = Object.keys(kelasCount);
  const values = Object.values(kelasCount);

  drawKelasChart(labels, values);
}

initDashboard();
function countByField(data, field) {

  const result = {};

  data.forEach(item => {

    const key = item[field];

    if (key !== undefined && key !== null && key !== "") {
      result[key] = (result[key] || 0) + 1;
    }

  });

  return result;
}
