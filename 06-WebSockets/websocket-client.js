const WS = new WebSocket('ws://localhost:3232');

WS.onmessage = (payload) => {
    console.log(payload.data);
};

WS.onopen = () => {
    // console.log('CONNECTION OPEN');
    displayTitle('CONNECTED TO SERVER');
};

WS.onclose = () => {
    console.log('CONNECTION CLOSE');
};

let displayTitle = (title) => {
    document.querySelector('h1').innerHTML = title;
};

document.forms[0].onsubmit = () => {
    let input = document.getElementById('message');
    WS.send(input.value);
};