// let elements = document.querySelectorAll('ul > li:last-child');
// elem.classList.add/remove("class") – добавить/удалить класс.

let selectedOption=document.getElementsByClassName('regform-select__selected')[0];  // select click for drop-down (selected area)
let selectedArrow=document.getElementsByClassName('regform-select__arrow')[0]; // selected area arrow
let selectOptions=document.getElementsByClassName('regform-select__options')[0];  // drop-down (options) area
var i=0;

var displayHideSelectOptions=function () {  // method: display or hidden select options (dropdown)
  console.log('displaySelectOptions');
  if(selectOptions.classList.contains('regform-select__options_display')){ // if select options display
    selectOptions.classList.remove('regform-select__options_display');
    selectOptions.classList.add('regform-select__options_hidden');
  }
  else if(selectOptions.classList.contains('regform-select__options_hidden')){  // if select options hidden
    selectOptions.classList.add('regform-select__options_display');
    selectOptions.classList.remove('regform-select__options_hidden');
  }
}

function displaySelectOptions() {  // only display select options
  selectOptions.classList.add('regform-select__options_display');
  selectOptions.classList.remove('regform-select__options_hidden');
}
function hideSelectOptions() {  // only hidden select options
  selectOptions.classList.remove('regform-select__options_display');
  selectOptions.classList.add('regform-select__options_hidden');
}

selectedOption.onclick = function() {  // click on selected option area
  console.log('selectedOption.onclick');
  displayHideSelectOptions();
}
selectedArrow.onclick = function() {  // click on selected arrow
  console.log('selectedArrow.onclick');
  displayHideSelectOptions();
}

selectOptions.onmouseleave = function() {  // mouse leave event on options area
  console.log('selectOptions.onmouseout');
  hideSelectOptions();
}

let optionsElements = document.getElementsByClassName('regform-select__option');  //  array, which content select options

for (let elem of optionsElements) {  // click event for each select option
    elem.onclick = function() {
      console.log('START elem.onclick = function');
      selectedOption.value=elem.innerHTML;
      hideSelectOptions();
      console.log('END elem.onclick = function');
    }
  }