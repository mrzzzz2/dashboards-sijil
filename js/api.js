const API_URL = "https://script.google.com/macros/s/AKfycbyH-oNX0GZp8U2Sx0ctEPWqbQLu0bF_alT23FTVzdKXkuGIlLGef5qKUy6QGMTlXeQnSw/exec";

async function fetchData() {
  const res = await fetch(API_URL);
  return await res.json();
}