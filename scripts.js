document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('text').innerText = 'Text wurde durch Button-Klick geändert!';
});

document.getElementById('hoverDiv').addEventListener('mouseover', function() {
    document.getElementById('hoverText').innerText = 'Text wurde durch Mausbewegung geändert!';
});

document.getElementById('inputField').addEventListener('keydown', function() {
    document.getElementById('keydownText').innerText = 'Text wurde durch Tastatureingabe geändert!';
});
