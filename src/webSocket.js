import ReconnectingWebSocket from 'reconnecting-websocket';
const ws = new ReconnectingWebSocket('wss://wssproxy.herokuapp.com/');
export default ws;