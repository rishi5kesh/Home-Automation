
#include<stdlib.h>
String readString;
float temper;
float smoke;
char temperChar[10];
char smokeChar[10];

int led = 13;

void setup() {
  Serial.begin(9600);  // initialize serial communications at 9600 bps
  temper=41.07;
  smoke=42.10;
}

void loop() {
  memset(temperChar, 0, 10);
  memset(smokeChar, 0, 10);

  String temperStr;
  String smokeStr;
    
  dtostrf(temper, 4, 2, temperChar);
 
  for(int i=0;i<sizeof(temperChar);i++) {
    temperStr+=temperChar[i];
  }

  dtostrf(smoke, 4, 2, smokeChar);

  for(int i=0;i<sizeof(smokeChar);i++) {
    smokeStr+=smokeChar[i];
  }

  while(!Serial.available()) {}
  // serial read section
  while (Serial.available()) {
    delay(30);  //delay to allow buffer to fill 
    if (Serial.available() >0) {
      char c = Serial.read();  //gets one byte from serial buffer
      readString += c; //makes the string readString
    }
  }

  if (readString.length() >0) {
     
    //see what was received
    readString="";
  }

  delay(1000);

  // serial write section

  
  char* buf = (char*) malloc(sizeof(char)*temperStr.length()+1);

  
  temperStr.toCharArray(buf, temperStr.length()+1);
  Serial.println(buf);
  Serial.flush();
  delay(500);

  char* buf2 = (char*) malloc(sizeof(char)*smokeStr.length()+1);
 
  smokeStr.toCharArray(buf2, smokeStr.length()+1);
  Serial.println(buf2);
  Serial.flush();
  temper++;
  smoke++;
}


