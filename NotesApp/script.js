let noteCount = 1;
$(function () {
  clearInput();
  getCurrentDate();
  setInterval(getCurrentDate, 1000);
  $("#addButton").on("click", addNote);
  $("#input").on("keypress", function (e) {
    if (e.keyCode === 13) {
      addNote();
    }
  });
});

//Get current date and print it in front-end
function getCurrentDate() {
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  // Date print
  $("#dateHeader").html(
    `${date.toLocaleDateString("el-gr", {
      weekday: "long",
    })}, ${day} ${date.toLocaleString("el-gr", {
      month: "long",
    })} ${year} <br/> ${date.toLocaleTimeString("en-GB")}`
  );
}

/**
 * Adds a note in main window
 */
function addNote() {
  const noteHTMLTemplate = `
  <div class = "note-item" id="item-${noteCount}"> 
  <input type="checkbox" data-count="${noteCount}"name="notecheck" id="notecheck-${noteCount}" class="note-check">
  <span class="note-text" id="noteText-${noteCount}">${input.value}</span>
  <button class="delete-btn" data-count="${noteCount}"  id="deleteBtn-${noteCount}" type="button">X</button>
  </div>
  `;

  if ($("#input").val().length < 1) {
    alert("The note is empty");
  } else {
    noteCount++;
    $("#mainWindow").append(noteHTMLTemplate);
    clearInput();
  }
}

$(".container").on("click", function (e) {
  if ($(e.target).is(".note-check")) {
    if ($(e.target).prop("checked") == true) {
      $(e.target).parent().children(".note-text").addClass("completed-task");
      $(e.target).parent().css({ "background-color": "#636363" });
    } else {
      $(e.target).parent().children(".note-text").removeClass("completed-task");
      $(e.target).parent().css({ "background-color": "#fff" });
    }
  }
  if ($(e.target).is(".delete-btn")) {
    $(e.target).parent().css({ "background-color": "#E34234", opacity: "0" });
    setTimeout(function () {
      $(e.target).parent().remove();
    }, 800);
  }
});

function clearInput() {
  $("#input").val("");
}
