const { keyboard, Key } = require('@nut-tree/nut-js');
const { SerialPort, ReadlineParser } = require('serialport');
const { logVerde, hpQueEmocion, nilaFeliz, fiesta, logAviso } = require('./ayudas');
const videos = ['A', 'B', 'C', 'D', 'E'];

async function inicio() {
  const puertos = await SerialPort.list();
  const puertoArduino = puertos.find(({ manufacturer, friendlyName }) => {
    return manufacturer.toLowerCase().includes('arduino') || friendlyName.toLowerCase().includes('arduino');
  });

  if (puertoArduino) {
    console.log(hpQueEmocion, logVerde('Hay ARDUINO!'));
    const puerto = new SerialPort({ path: puertoArduino.path, baudRate: 115200 });
    const parsero = new ReadlineParser();

    puerto.pipe(parsero);
    puerto.on('open', () => {
      console.log(nilaFeliz, logAviso("¡LiStOs Pa' La FiEsTa EnFlUjO-rIvErA!"), fiesta);
    });

    parsero.on('data', async (i) => {
      const letra = videos[+i];
      await keyboard.pressKey(Key[letra]);
      await keyboard.releaseKey(Key[letra]);
    });
  }
}

inicio();
