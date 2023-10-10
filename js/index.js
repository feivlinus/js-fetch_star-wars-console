console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData(url) {
  const response = await fetch(url);
  await console.log("Status: ", response.status, "Ok? ", response.ok);
  await console.log("RAW Response: ", response);
  const data = await response.json();
  return data.results;
}

const fetchedAndParsedData = await fetchData(url);
await console.log("Response.results: ", fetchedAndParsedData);

await console.log(
  "R2-D2 eye color: ",
  fetchedAndParsedData.find((element) => element.name === "R2-D2").eye_color
);
