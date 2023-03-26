const { keyboard, Key } = require('@nut-tree/nut-js');
const { SerialPort, ReadlineParser } = require('serialport');
const { logVerde, hpQueEmocion, nilaFeliz, fiesta, logAviso, buscarPuertoArduino } = require('./ayudas');
const videos = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'P', 'Num1', // fin primera fila : 2 - 11
 'A','S', // 12 - 13                           
 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', // 14 - 21 Salto de pines en arduino
 'F', 'G', 'H', 'J', 'K', 'Ñ', 'Num2', // fin segunda fila: 22 - 28   
 'Z', 'X', 'C', 'V', 'B', 'N', 'M','Comma','Period','Num3' // Fin tercera fila: 29 - 38
];                    
                                
async function inicio() {
  console.log('jude')
  const puertoArduino = await buscarPuertoArduino();
  console.log('Juli', puertoArduino)
  if (puertoArduino) {
    console.log(hpQueEmocion, logVerde('Hay ARDUINO!'));
    const puerto = new SerialPort({ path: puertoArduino.path, baudRate: 115200 });
    const parsero = new ReadlineParser();

    puerto.pipe(parsero);
    puerto.on('open', () => {
      console.log(nilaFeliz, logAviso("¡LiStOs Pa' La FiEsTa EnFlUjO-rIvErA!"), fiesta);
    });

    parsero.on('data', async (i) => {
      //console.log( videos[+i], 'pin:', +i +2 )
      const letra = videos[+i];
      
      await keyboard.pressKey(Key[letra]);
      await keyboard.releaseKey(Key[letra]);
    });                             
  }
}
console.log('hey')
inicio();
