var host = 'localhost';
var wsUri = 'ws://' + host + ':8081';
var output;

function init() {
    output = document.getElementById('output');
    testWebSocket();
}

function testWebSocket() {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt); };
    websocket.onclose = function(evt) { onClose(evt); };
    websocket.onmessage = function(evt) { onMessage(evt); };
    websocket.onerror = function(evt) { onError(evt); };
}

function onOpen(evt) {
    writeToScreen('SERVER CONNECTION ESTABLISHED');
}

function onClose(evt) {
    writeToScreen('SERVER CONNECTION SEPARATED');
}

function onMessage(evt) {
    writeMessage('<span style="color: blue;">Server Data: ' + evt.data+'</span>');
}

function onError(evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function writeToScreen(message) {
    var pre = document.createElement('p');
    pre.style.wordWrap = 'break-word';
    pre.innerHTML = message;
    output.appendChild(pre);
}

function writeMessage(message) {
    var pre = document.createElement('p');
    pre.setAttribute('id', 'server-data');
    var oldPre = document.getElementById('server-data');
    pre.style.wordWrap = 'break-word';
    pre.innerHTML = message;
    output.replaceChild(pre, oldPre);
}

window.addEventListener('load', init, false);