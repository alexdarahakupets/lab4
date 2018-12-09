var part2 = document.getElementById('part2');
var part2button = document.getElementById('var2');
var addButton = document.getElementById('add_2');
var field2 = document.getElementsByClassName('field2')[0];
var selectedRect;

part2button.addEventListener('click', fieldAppearance2);
addButton.addEventListener('click', rectSpawn);
field2.addEventListener('click', rectSelect);
document.addEventListener("keydown", moveRect)

function fieldAppearance2() {
    part1.className = 'container hidden';
    part2.className = 'container';
    part3.className = 'container hidden';
}

function rectSpawn() {
    var rect = createRect();
    var leftCoord = getRandomInt(field2.offsetLeft + field2.clientLeft - 50, (field2.clientLeft + field2.clientWidth - 50));
    var topCoord = getRandomInt(field2.offsetTop + field2.clientTop - 100, (field2.clientTop + field2.clientHeight - 50));

    rect.style.left = leftCoord + 'px';
    rect.style.top = topCoord + 'px';
    field2.appendChild(rect);
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

function rectSelect(event) {
    let target = event.target;
    if (target.className != "randRect") return;
    lightRect(target);
}

function lightRect(node) {
    if (selectedRect) {
        selectedRect.removeAttribute('id');
    }
    selectedRect = node;
    selectedRect.setAttribute('id', 'selected');
}

function moveRect(e) {
    if (!(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40)) return;

    var selected = document.getElementById("selected");
    selected.style.zIndex = '1000';
    var styles = getComputedStyle(selected);
    var coordSelected = selected.getBoundingClientRect();

    var left = parseInt(styles.left);
    var top = parseInt(styles.top);

    switch (e.keyCode) {

        case 37:
            if (selected.offsetLeft > 0)
                selected.style.left = left - 10 + "px";
            break;
        case 38:
            if (selected.offsetTop > 0)
                selected.style.top = top - 10 + "px";
            break;
        case 39:
            if (coordSelected.right < field2.offsetLeft + field2.offsetWidth)
                selected.style.left = left + 10 + "px";
            break;
        case 40:
            if (coordSelected.bottom < field2.offsetTop + field2.offsetHeight)
                selected.style.top = top + 10 + "px";
            break;
    }
}