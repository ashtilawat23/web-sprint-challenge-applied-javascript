// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const div_header = document.createElement('div');
    const span_date = document.createElement('span');
    const h1_lambdatimes = document.createElement('h1');
    const span_temp = document.createElement('span');

    div_header.classList.add('header');
    span_date.classList.add('date');
    span_temp.classList.add('temp');

    div_header.appendChild(span_date);
    div_header.appendChild(h1_lambdatimes);
    div_header.appendChild(span_temp);

    span_date.textContent = 'MARCH 28, 2020';
    span_temp.textContent = '98°';
    h1_lambdatimes.textContent = 'Lambda Times';

    return div_header;

}   

//console.log(Header())

const header_location = document.querySelector('.header-container');
header_location.append(Header());
