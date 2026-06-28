async function initDashboard() {

  const data = await fetchData();

  console.log("DATA:", data);

  document.getElementById("jumlahRekod").innerHTML = data.length;

const jenis = countByField(data, "jenis_rekod");

console.log("JENIS:", jenis);

if (Object.keys(jenis).length > 0) {
  drawJenisChart(
    Object.keys(jenis),
    Object.values(jenis)
  );
}

  const peringkat = countByField(data, "peringkat");

console.log("PERINGKAT:", peringkat);

if (Object.keys(peringkat).length > 0) {
  drawPeringkatChart(
    Object.keys(peringkat),
    Object.values(peringkat)
  );
}
  const kelas = countByField(data, "kelas");

  drawKelasChart(
    Object.keys(kelas),
    Object.values(kelas)
    data

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


  container.innerHTML = html;
}

function filterByField(data, field, value) {
  return data.filter(item => item[field] === value);
}
