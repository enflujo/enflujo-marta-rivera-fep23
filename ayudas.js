const colores = require('cli-color');
const emoji = require('node-emoji');

// https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json
const hpQueEmocion = emoji.emojify(':star-struck:');
const hpQueGonorrea = emoji.emojify(':face_with_symbols_on_mouth:');
const nilaFeliz = emoji.emojify(':heart_eyes_cat:');
const fiesta = emoji.emojify(':dancers:');

const aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = {
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
