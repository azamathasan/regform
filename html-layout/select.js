// let elements = document.querySelectorAll('ul > li:last-child');
// elem.classList.add/remove("class") – добавить/удалить класс.

let selectedOption=document.getElementsByClassName('regform-select__selected')[0];
let selectOptions=document.getElementsByClassName('regform-select__options')[0];
var i=0;

var displayHideSelectOptions=function () {
  console.log('displaySelectOptions');
  if(selectOptions.classList.contains('regform-select__options_display')){
    selectOptions.classList.remove('regform-select__options_display');
    selectOptions.classList.add('regform-select__options_hidden');
  }
  else if(selectOptions.classList.contains('regform-select__options_hidden')){
    selectOptions.classList.add('regform-select__options_display');
    selectOptions.classList.remove('regform-select__options_hidden');
  }
}

function displaySelectOptions() {
  selectOptions.classList.add('regform-select__options_display');
  selectOptions.classList.remove('regform-select__options_hidden');
}
function hideSelectOptions() {
  selectOptions.classList.remove('regform-select__options_display');
  selectOptions.classList.add('regform-select__options_hidden');
}

selectedOption.onclick = function() {
  console.log('selectedOption.onclick');
  // elem.classList.contains("class") – проверка наличия класса, возвращает true/false.
  displayHideSelectOptions();
  /* selectOptions.classList.add('regform-select__options_hidden');
  selectOptions.classList.remove('regform-select__options_display'); */
}

selectOptions.onmouseleave = function() {
  console.log('selectOptions.onmouseout');
  hideSelectOptions();
}

// let optionsElements = document.querySelectorAll('.regform-box__select > select > option');
let optionsElements = document.getElementsByClassName('regform-select__option');


/* optionsElements.forEach(elem => {
  elem.onclick = function() {
    console.log('START elem.onclick = function');
    selectedOption.value=elem.innerHTML;
    displaySelectOptions();
    console.log('END elem.onclick = function');
    // selectOptions.classList.add('regform-select__options_display');
    // selectOptions.classList.remove('regform-select__options_hidden');
  }
}); */


for (let elem of optionsElements) {
    elem.onclick = function() {
      console.log('START elem.onclick = function');
      selectedOption.value=elem.innerHTML;
      hideSelectOptions();
      console.log('END elem.onclick = function');
      // selectOptions.classList.add('regform-select__options_display');
      // selectOptions.classList.remove('regform-select__options_hidden');
    }
  }