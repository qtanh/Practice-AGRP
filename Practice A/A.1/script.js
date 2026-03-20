
function updateTheme(isNight) {
    if (isNight) {
        document.body.classList.add('dark-mode');
        
        localStorage.setItem('isNightMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
    
        localStorage.setItem('isNightMode', 'false');
    }
}


function clickDay() {
    updateTheme(false); 
}

function clickNight() {
    updateTheme(true); 
}

window.onload = function() {
    const savedMode = localStorage.getItem('isNightMode');
    if (savedMode === 'true') {
        updateTheme(true);
    } else {
        updateTheme(false);
    }
};