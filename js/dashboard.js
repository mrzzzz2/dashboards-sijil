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

function renderList(data) {

  const container = document.getElementById("listContent");

  if (!data || data.length === 0) {
    container.innerHTML = "Tiada data";
    return;
  }

  let html = "<table border='1' cellpadding='5' cellspacing='0'>";

  html += `
    <tr>
      <th>Nama</th>
      <th>Kelas</th>
      <th>Jenis</th>
      <th>Peringkat</th>
    </tr>
  `;

  data.forEach(item => {
    html += `
      <tr>
        <td>${item.nama_pelajar}</td>
        <td>${item.kelas}</td>
        <td>${item.jenis_rekod}</td>
        <td>${item.peringkat}</td>
      </tr>
    `;
  });

  html += "</table>";

  container.innerHTML = html;
}

function filterByField(data, field, value) {
  return data.filter(item => item[field] === value);
}
