fetch('part/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);

fetch('part/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);


let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel img");
    index += step;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    document.querySelector(".carousel").style.transform = `translateX(${-index * 100}%)`;
}