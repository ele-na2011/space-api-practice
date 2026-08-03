const API_KEY = import.meta.env.VITE_NASA_API_KEY;

document.querySelector("#app").innerHTML = "<p>loading...</p>";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then(data => {

    let media;

      if (data.media_type === "image") {
        media = `<img src="${data.url}"/ style = "width:100%; height: auto;">`;
      } else if (data.url.includes("youtube.com")) {
        media = `<iframe width="560" height="315" src="${data.url}" frameborder="0" allowfullscreen></iframe>`;
      } else {
        media = `<video src="${data.url}" controls style = "width:100%; height: auto;"></video>`;
      }
    document.querySelector("#app").innerHTML = `
      <h1 class = "title">${data.title}</h1>
      ${media}
      <p class = "explanation">${data.explanation}</p>
    `})

function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime;
    }
    setInterval(updateTime, 1000);