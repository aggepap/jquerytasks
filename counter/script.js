let counter = 0;
const DEFAULT = 0;
$(function () {
  const $btnMinus = $("#btnMinus");
  const $btnReset = $("#btnReset");
  const $btnPlus = $("#btnPlus");

  $btnMinus.on("click", onMinusClicked);
  $btnReset.on("click", onResetClicked);
  $btnPlus.on("click", onPlusClicked);
});
/**
 * Action taken after the Decrease button was clicked
 * Actions include decreasing the counter
 */
function onMinusClicked() {
  decreaseCounter();
}

/**
 * Action taken after the reset button was clicked
 * Actions include resetting the counter
 */
function onResetClicked() {
  resetCounter();
}

/**
 * Action taken after the increase button was clicked
 * Actions include increasing the counter
 */
function onPlusClicked() {
  increaseCounter();
}

//Model
/**
 * Decreases counter by one and renders to UI
 */

function decreaseCounter() {
  counter--;
  showCounter();
}

/**
 * Resets counter to zero and renders to UI
 */

function resetCounter() {
  counter = DEFAULT;
  showCounter();
}

/**
 * Increases counter by one and renders to UI
 */

function increaseCounter() {
  counter++;

  showCounter();
}
/**
 *  Assigns the counter value to the corresponding UI Element
 * And gives style accordingly
 */
function showCounter() {
  //Data Binding
  const $counterField = $("#counterField");
  $counterField.text(counter);
  styleCounterElement($counterField);
}

function styleCounterElement(element) {
  $el = $(element);
  $el.toggleClass("color-green", counter > 0);
  $el.toggleClass("color-black", counter === 0);
  $el.toggleClass("color-red", counter < 0);
}
