var part1 = document.getElementById('part1');
var part1button = document.getElementById('var1');
var addButton = document.getElementById('add_1');
var field1 = document.getElementsByClassName('field1')[0];
var statButton = document.getElementById('stat');

part1button.addEventListener('click', fieldAppearance1);
addButton.addEventListener('click', noteAppearance);
statButton.addEventListener('click', statistics);
field1.addEventListener('click', noteDelete)


function fieldAppearance1() {
    part1.className = 'container';
    part2.className = 'container hidden';
    part3.className = 'container hidden';
}

function noteAppearance() {
    var text = document.getElementById('innerText').value;
    var color = document.getElementById('innerColor').value;
    var positionStart = document.getElementsByName('position')[0];
    var positionEnd = document.getElementsByName('position')[1];
    var newElem = document.createElement('div');


    newElem.textContent = text;
    newElem.style.backgroundColor = color;
    newElem.className = 'note';

    if (positionStart.checked) {
        field1.insertBefore(newElem, field1.firstElementChild)
    } else if (positionEnd.checked) {
        field1.appendChild(newElem);
    }
}

function noteDelete(event) {
    var target = event.target;

    if (!target.className == 'note') return;

    target.parentNode.removeChild(target);
}

function statistics() {
    var count = field1.children.length;
    var wholeText = [];
    for (let i = 0; i < count; i++) {
        let x = field1.children[i].textContent;
        wholeText.push(x);
    }
    alert(`Amount of elements: ${count}, with the next text: ${wholeText}`);
}