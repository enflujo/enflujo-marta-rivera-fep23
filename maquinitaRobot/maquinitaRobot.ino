const int totalPines = 2;

bool estados[totalPines] = {false};

void setup() {
  Serial.begin(115200);

  for (int i = 0; i < totalPines; i++) {
    pinMode(i + 2, INPUT);
  }
}

void loop() {
  for (int i = 0; i < totalPines; i++) {
    int pin = i + 2;
    int estado = digitalRead(pin);
    bool estadoActual = estados[i];
    
    if (estado == HIGH) {
      if (estadoActual) continue;
      estados[i] = true;
      Serial.println(i);
    } else {
      if (!estadoActual) continue;
      estados[i] = false;
    }
  }
  
  delay(20);
}
