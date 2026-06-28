async function initDashboard() {

  const data = await fetchData();

  console.log("RAW DATA:", data);

  document.getElementById("jumlahRekod").innerHTML = data.length;

}

initDashboard();
