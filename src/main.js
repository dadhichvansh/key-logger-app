import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1>Key Logger</h1>
    <div class="button-container">
      <button id="start-btn">Start Logging Keypresses</button>
      <button id="stop-btn">Stop Logging Keypresses</button>
    </div>
    <div class="button-container">
      <div id="log"></div>
      <div id="state"></div>
    </div>
  </div>
`;
