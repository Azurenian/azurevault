

var lightRadioButton = document.getElementById('light');
var darkRadioButton = document.getElementById('dark');

lightRadioButton.addEventListener('change', function () {
    if (lightRadioButton.checked) {
        lightMode();
    }
});

darkRadioButton.addEventListener('change', function () {
    if (darkRadioButton.checked) {
        darkMode();
    }
});


var mode = '{}'

function lightMode() {
    
    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
    addCSS(" html { background-color:rgb(226, 226, 226); color: navy;} .ending, div.left1, div.left2, div.right1, div.right2, div.htop{background-color: rgb(243, 243, 227);} .ending {background-color: navy; color: white;} nav {background-color: navy; color: white;}")
}

function darkMode() {
    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
    addCSS(" html { background-color:black; color: white;} .ending, div.left1, div.left2, div.right1, div.right2, div.htop{background-color: rgb(49, 49, 49);} nav {background-color: white; color: navy;}")
} 
