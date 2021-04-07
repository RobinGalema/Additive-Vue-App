import dataJson from './data/DataStreamDump.json';
let machineData = {data: {}};

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

/**
 * Looks through an array of module types to find the object of the given module type
 * @param {string} moduleToFind The name of the module that will be looked for
 * @param {Array} sample The Array to search
 * @returns {object} The object of the found module
 */
const findModule = (moduleToFind, sample) =>{
    return sample.find(o => o.moduleName === moduleToFind);
}
/**
 * Looks through an array of modules to find the given module and property within the given module
 * @param {Array} sample The array to search
 * @param {string} moduleName The name of the module that will be looked for
 * @param {string} property The name of the property that will be looked for
 * @returns {object} The object containing the property
 */
const findProperty = (sample, moduleName, property) => {
    let moduleToSearch = findModule(moduleName, sample);                                                                             // <-- DEBUG !

    return moduleToSearch.data.find(o => o.property === property);
}

let currentTimeStamp = dataJson.data[0].time;
let data = GetTimeStampData(currentTimeStamp);
let sortedData = SortData(data);

                           //<-- DEBUG !
// console.log(`[${OxygenLevel.time}][${OxygenLevel.module}] ${OxygenLevel.property} = ${OxygenLevel.value}`);  
// console.log(`[${Temprature.time}][${Temprature.module}] ${Temprature.property} = ${Temprature.value}`);     //<-- DEBUG !



console.log(machineData);

let currentTime = dataJson.data[0].time;
let loopedTimes = [dataJson.data[0].time];

const getAllTimes = () => {
    let counter = 0;
    let current;

    dataJson.data.forEach(element => {
        if (element.time != current){
            current = element.time;
            counter++
        }
    });

    return counter;
}

const GetNextTimeStamp = () =>{
    for (let i = 0; i < dataJson.data.length; i++) {
        if (dataJson.data[i].time != currentTime && !loopedTimes.includes(dataJson.data[i].time)){
            loopedTimes.push(dataJson.data[i].time);
            currentTime = dataJson.data[i].time;
            return dataJson.data[i].time;
        }        
    }
}

const LoopTime = (totalTime) =>{
    for (let i = 0; i < totalTime; i++) {
        setTimeout(() => {
            UpdateData();
            console.log(machineData);
            console.log(GetNextTimeStamp());
        }, i * 1000);   
    }
}

const UpdateData = () =>{
    let currentData = GetTimeStampData(currentTime);
    let currentSortedData = SortData(currentData);

    machineData.data['OxygenLevel'] = findProperty(currentSortedData, 'CTM', 'ProcessGasOxygenLevel');
    machineData.data['Temperature'] = findProperty(currentSortedData, 'AMC1', 'BuildPlateTemperature');
}
