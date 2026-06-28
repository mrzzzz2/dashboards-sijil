async function initDashboard() {

  const data = await fetchData();

  console.log("DATA:", data);

  document.getElementById("jumlahRekod").innerHTML = data.length;

  // 🧠 1. KELAS
  const kelas = countByField(data, "kelas");

  // 🧠 2. JENIS REKOD
  const jenis = countByField(data, "jenis_rekod");

  // 🧠 3. PERINGKAT
  const peringkat = countByField(data, "peringkat");

  // 📊 KELAS CHART
  drawKelasChart(
    Object.keys(kelas),
    Object.values(kelas)
  );

  // 📊 JENIS CHART
  drawJenisChart(
    Object.keys(jenis),
    Object.values(jenis)
  );

  // 📊 PERINGKAT CHART
  drawPeringkatChart(
    Object.keys(peringkat),
    Object.values(peringkat)
  );
}
function countByField(data, field) {

  const result = {};

  data.forEach(item => {

    const key = (item[field] || "").toString().trim();

    if (key) {
      result[key] = (result[key] || 0) + 1;
    }

  });

  return result;
}
