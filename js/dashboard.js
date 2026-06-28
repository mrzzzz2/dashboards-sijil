async function initDashboard() {

  const data = await fetchData();

  console.log("DATA:", data);

  document.getElementById("jumlahRekod").innerHTML = data.length;

  const kelas = countByField(data, "kelas");

  drawKelasChart(
    Object.keys(kelas),
    Object.values(kelas)

    const jenis = countByField(data, "jenis_rekod");
drawJenisChart(Object.keys(jenis), Object.values(jenis));
  );
}



initDashboard();
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
