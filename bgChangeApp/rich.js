let bgcolor;
const $main = $("#main");

$(function () {
  $(".header").html(header);
  const $changeButtonRich = $("#changeButtonRich");
  $changeButtonRich.on("click", changeRichColor);
});

function fullRandomColor() {
  pallete = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const randomPick = Math.floor(Math.random() * pallete.length);
  return pallete[randomPick];
}
function fullRandomColorCreator() {
  const RandomColor = `#${fullRandomColor()}${fullRandomColor()}${fullRandomColor()}${fullRandomColor()}${fullRandomColor()}${fullRandomColor()}`;
  return RandomColor;
}
function changeRichColor() {
  const pickedColor = fullRandomColorCreator();
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
          <a class="navbar-brand" href="#">BG Color App Rich</a>
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
