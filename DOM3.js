document.getElementById('main-heading').textContent = 'DOM Manipulation Practice';

let textContentParagraphs = document.getElementsByClassName('text-content');
for (let paragraph of textContentParagraphs) {
    paragraph.style.color = 'blue';
}

document.getElementById('main-image').src = 'https://via.placeholder.com/200';

document.querySelector('.container').style.backgroundColor = '#f0f0f0';

let containerParagraphs = document.querySelectorAll('.container p');
containerParagraphs.forEach(paragraph => {
    paragraph.textContent = 'Updated paragraph inside the container';
});
