const WS = new WebSocket('ws://localhost:3232');

document.forms[0].onsubmit = () => {
    // console.log(document.getElementById('message'));
    let input = document.getElementById('message');
    // console.log(input.value);
    WS.send(input.value);
};