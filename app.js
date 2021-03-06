const yargs = require('yargs');

const global = require('./global');
const geocode = require('./geocode/geocode');

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'address for the weather',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});