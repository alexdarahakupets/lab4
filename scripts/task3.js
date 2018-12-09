var part3 = document.getElementById('part3');
var part3button = document.getElementById('var3');
var addButton = document.getElementById('add_3');
var field3 = document.getElementsByClassName('field3')[0];
var clickedRect;

part3button.addEventListener('click', fieldAppearance3);
addButton.addEventListener('click', rectSpawn);
field3.addEventListener('mousedown', rectClick);




function fieldAppearance3() {
    part1.className = 'container hidden';
    part2.className = 'container hidden';
    part3.className = 'container';
}

function rectSpawn() {
    var rect = createRect();
    var leftCoord = getRandomInt(field3.offsetLeft + field3.clientLeft - 50, (field3.clientLeft + field3.clientWidth - 50));
    var topCoord = getRandomInt(field3.offsetTop + field3.clientTop - 100, (field3.clientTop + field3.clientHeight - 50));

    rect.style.left = leftCoord + 'px';
    rect.style.top = topCoord + 'px';
    field3.appendChild(rect);
}

function createRect() {
    var div = document.createElement('div');
    div.className = 'randRect';
    div.style.width = getRandomInt(30, 150) + 'px';
    div.style.height = getRandomInt(30, 150) + 'px';
    div.style.backgroundColor = getRandomColor();
    div.style.position = 'absolute';
    return div;
}

function getRandomColor() {
    var red = getRandomInt(0, 255);
    var green = getRandomInt(0, 255);
    var blue = getRandomInt(0, 255);
    var rgb = '#' + red.toString(16) + green.toString(16) + blue.toString(16);
    return rgb;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function lightupRect(node) {
    if (clickedRect) {
        clickedRect.removeAttribute('id');
    }
    clickedRect = node;
    clickedRect.setAttribute('id', 'clicked');
}

function rectClick(e) {
    let target = e.target;
    if (target.className != 'randRect') return;
    target.style.position = 'absolute';
    target.style.zIndex = 1000;
    lightupRect(target);

    field3.onmousemove = function (e) {
        clickedRect.style.left = e.pageX - field3.offsetLeft - clickedRect.offsetWidth / 2 + 'px';
        clickedRect.style.top = e.pageY - field3.offsetTop - clickedRect.offsetHeight / 2 + 'px';
    }

    field3.onmouseup = function (e) {
        clickedRect.style.left = e.pageX - field3.offsetLeft - clickedRect.offsetWidth / 2 + 'px';
        clickedRect.style.top = e.pageY - field3.offsetTop - clickedRect.offsetHeight / 2 + 'px';
        field3.onmousemove = function () {
            return false
        };
    }
}
