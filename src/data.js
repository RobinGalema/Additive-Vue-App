console.log('Hello world');

import dataJson from './data/DataStreamDump.json';

/**
 * Looks for data in a data file or object with a specfic timestamp
 * @param {string} timeStamp The timestamp to look for
 * @returns Array of objects when data is found for the given timestamp, false if no data is found
 */
const GetTimeStampData = (timeStamp) =>{

    let dataArray = [];

    // Checks for each object in the data file if the timestamp matches the given timestamp
    dataJson.data.forEach(element => {
        if (element.time == timeStamp){
            // Add the object to the array
            dataArray.push(element);
        }
    });

    // Return the array for the given timestamp if there is data for this timestamp
    if (dataArray.length > 0){return dataArray} 
    else return false;
}

/**
 * Sorts an array of data into an new array of objects per module type
 * @param {Array} data Array of data to sort
 * @returns Array of data sorted by module type
 */
const SortData = (data) =>{
    let moduleTypes = [];
    let sortedData = [];

    // Check for all module types and fill an temporary array with these types
    data.forEach(entry => {
        if (!moduleTypes.includes(entry.module)){
            moduleTypes.push(entry.module);
        }
    });
    console.log(moduleTypes);                                                                              // <-- DEBUG !

    // Create and object for each module type
    moduleTypes.forEach(type => {
        let moduleData = {moduleName : type, data : []};

        // Fill the data-array of the module type with all the data from this module-type
        data.forEach(entry => {
            if (entry.module == type){
                moduleData.data.push(entry);
            }
        });

        // Add the object of the module type to final sorted array
        sortedData.push(moduleData);
    });

    // Return the sorted array
    return sortedData;
}

const findModule = (moduleToFind) =>{
    return sortedData.find(o => o.moduleName === moduleToFind);
}

const findProperty = (moduleName, property) => {
    let moduleToSearch = findModule(moduleName);
    console.log(moduleToSearch);                                                                                // <-- DEBUG !

    return moduleToSearch.data.find(o => o.property === property);
}

let currentTimeStamp = dataJson.data[0].time;
let data = GetTimeStampData(currentTimeStamp);
let sortedData = SortData(data);


let OxygenLevel = findProperty('CTM', 'ProcessGasOxygenLevel');                                                 //<-- DEBUG !
console.log(`[${OxygenLevel.time}][${OxygenLevel.module}] ${OxygenLevel.property} = ${OxygenLevel.value}`);     //<-- DEBUG !

/*
    - json bestand uitlezen, data sorteren                                              ✔
    - functie maken die data per timestamp aan elkaar koppelt                           ✔
    - variabelen uitlezen per property voor een timestamp                               ✔
    - fucntie maken die per seconde een nieuwe timestamp neemt
    - per timestamp data uitlezen en in variabelen van het machine-object plaatsen
    - data visualiseren met vue en testen data-binding
    - testen/ bugfixes
    - succes en semester gehaald EZ EZ EZ

*/
