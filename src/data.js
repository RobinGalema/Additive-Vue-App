console.log('Hello world');

import dataJson from './data/DataStreamDump.json';

dataJson.data.forEach(element => {
    console.log(element);
});


/*
    TODO:
    - Machine object? -> koppelen json bestand aan machine
    - functie maken die data per timestamp aan elkaar koppelt
    - fucntie maken die per seconde een nieuwe timestamp neemt
    - per timestamp data uitlezen en in variabelen van het machine-object plaatsen
    - data visualiseren met vue en testen data-binding
    - testen/ bugfixes
    - succes en semester gehaald EZ EZ EZ

*/
