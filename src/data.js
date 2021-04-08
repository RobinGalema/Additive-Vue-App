import dataJson from './data/DataStreamDump.json';
let machineData = {data: {RemainingPrintHeight: ""}};

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


// Declare variables for looping through time in the json
let currentTime = dataJson.data[0].time;
let loopedTimes = [dataJson.data[0].time];

/**
 * Gets the amount of seconds included in the data file
 * @returns {number} Amount of seconds of data represented in the json
 */
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

/**
 * Finds the next time string from the data
 * @returns {string} The next time string in the data file
 */
const GetNextTimeStamp = () =>{
    for (let i = 0; i < dataJson.data.length; i++) {
        if (dataJson.data[i].time != currentTime && !loopedTimes.includes(dataJson.data[i].time)){
            loopedTimes.push(dataJson.data[i].time);
            currentTime = dataJson.data[i].time;
            return dataJson.data[i].time;
        }        
    }
}

/**
 * Loops through all timestamps, wait 1 second in between stamps
 */
const LoopTime = (dataSet) =>{
    for (let i = 0; i < getAllTimes(); i++) {
        setTimeout(() => {
            UpdateData(dataSet);
            console.log(currentTime); // DEBUG
            console.log(machineData); // DEBUG
            GetNextTimeStamp();
        }, i * 1000);   
    }
}

/**
 * Updates the data object with new data from the json file
 */
const UpdateData = (dataSet) =>{
    let sortedData = SortData(GetTimeStampData(currentTime));

    dataSet.data['OxygenLevel'] = findProperty(sortedData, 'CTM', 'ProcessGasOxygenLevel').value;
    dataSet.data['Temperature'] = findProperty(sortedData, 'AMC1', 'BuildPlateTemperature').value;
    dataSet.data['RemainingPrintHeight'] = findProperty(sortedData, 'AMC1', 'RemainingPrintHeight').value;

    console.log(`Remaining print height: ${dataSet.data.RemainingPrintHeight}`); // DEBUG
}

export default LoopTime;

