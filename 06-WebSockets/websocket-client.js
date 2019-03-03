const WS = new WebSocket('ws://localhost:3232');

WS.onmessage = (payload) => {
    console.log(payload.data);
};

document.forms[0].onsubmit = () => {
    let input = document.getElementById('message');
    WS.send(input.value);
};