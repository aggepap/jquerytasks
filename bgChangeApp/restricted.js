let bgcolor;
const $changeButton = $("#changeButton");
const $main = $("#main");
$(function () {
  $("header").html(header);
  $changeButton.on("click", changeColor);
});

function randomColor() {
  pallete = ["#990000", "#229954", "#ba4a00", "#212f3d", " #1b4f72", "#f1c40f"];
  const randomPick = Math.floor(Math.random() * pallete.length);
  return pallete[randomPick];
}

function changeColor() {
  const pickedColor = randomColor();
  backgroundChange(pickedColor);
  colorTextChange(pickedColor);
}

function backgroundChange(color) {
  $main.css({ "background-color": color });
}
function colorTextChange(color) {
  const $colorCodeDOM = $("#colorCode");
  $colorCodeDOM.text(color);
}

const header = `
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">BG Color App Restricted</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./index.html"
                  >Restricted App</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./rich.html">Rich app</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  `;
