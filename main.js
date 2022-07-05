const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');


const getStyle = (element, style) =>
    window  
        .getComputedStyle(element)
        .getPropertyValue(style);

const initialColors = {
    bg: getStyle(html, '--bg'),
    btdRing: getStyle(html, '--btd-ring'),
    colorName: getStyle(html, '--color-name'),
    btdRingHover: getStyle(html, '--btd-ring-hover')
}

const lightMode = {
    bg:'#ADD8E6',
    btdRing: '#4682B4',
    colorName: 'black',
}

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key),colors[key])
        )
}


checkbox.addEventListener('change', ({target}) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors) ; 
})