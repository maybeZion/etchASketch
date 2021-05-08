const CANVAS = document.querySelector('#canvas');
const CLEAR_BUTTON = document.querySelector('#clear');
const COLOR_BUTTON = document.querySelector('#color');
const CANVAS_STYLE = getComputedStyle(CANVAS);

let colorMode = false;
let tileCount = 16;

CLEAR_BUTTON.addEventListener('click', () => {
    tileCount = Number(window.prompt('How many tiles per side? (DEFAULT: 16)', 16));
    canvasInit();
});

function canvasInit() {
    while (CANVAS.firstChild) {
        CANVAS.removeChild(CANVAS.firstChild);
    }
    for (let i = 0; i < Math.pow(tileCount, 2); i++) {
        let tileNode = document.createElement('div');
        tileNode.addEventListener('mouseover', () => {
            if (colorMode) {
                tileNode.style['background-color'] = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
            } else {
                tileNode.style['background-color'] = 'black';
            }
        });
        tileNode.style.width = Math.floor(Number(CANVAS_STYLE.width.slice(0, -2)) / tileCount).toString() + 'px';
        tileNode.style.height = Math.floor(Number(CANVAS_STYLE.height.slice(0, -2)) / tileCount).toString() + 'px';
        CANVAS.appendChild(tileNode);
    }
}

COLOR_BUTTON.addEventListener('click', () => {
    if (colorMode == true) {
        colorMode = false;
        console.log('Color mode disabled.');
    } else {
        colorMode = true;
        console.log('Color mode enabled.');
    }
});

canvasInit();
