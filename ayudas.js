const colores = require('cli-color');
const emoji = require('node-emoji');
const { SerialPort } = require('serialport');

// https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json
const hpQueEmocion = emoji.emojify(':star-struck:');
const hpQueGonorrea = emoji.emojify(':face_with_symbols_on_mouth:');
const nilaFeliz = emoji.emojify(':heart_eyes_cat:');
const fiesta = emoji.emojify(':dancers:');

const aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const idsArduinos = [
  '2341', //Arduino Uno,
  '1a86', // Arduino Mega 2560
];

const buscarPuertoArduino = async () => {
  const puertos = await SerialPort.list();

  return puertos.find(({ manufacturer, vendorId, friendlyName }) => {
    let esArduino = false;

    if (manufacturer && manufacturer.toLowerCase().includes('arduino')) {
      esArduino = true;
    } else if (friendlyName && friendlyName.toLowerCase().includes('arduino')) {
      esArduino = true;
    } else if (vendorId && idsArduinos.includes(vendorId)) {
      return true;
    }
    return esArduino;
  });
};

module.exports = {
  buscarPuertoArduino,
  logError: colores.red.bold,
  logAviso: colores.bold.xterm(214),
  logBloque: colores.bgCyan.black,
  logCyan: colores.cyan.bold,
  logVerde: colores.greenBright,
  hpQueEmocion,
  hpQueGonorrea,
  nilaFeliz,
  fiesta,
};
