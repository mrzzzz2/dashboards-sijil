async function initDashboard() {

  const data = await fetchData();

  document.getElementById("jumlahRekod").innerHTML = data.length;

  // ❗ Step 5 就放在这里 ↓↓↓

  const kelasCount = countByField(data, "kelas");

  const labels = Object.keys(kelasCount);
  const values = Object.values(kelasCount);

  drawKelasChart(labels, values);
}

initDashboard();