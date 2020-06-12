//Objects
var hector = {
    firstname: 'Hector',
    lastName: 'Hernandez',
    birthYear: '1996',
    job: 'Home Depot',
    isMarried: false
};

//Properties
console.log(hector);
console.log(hector.lastName);
console.log(hector['job']);

var x = 'birthYear';
console.log(hector[x]);

hector.job= 'doctor';
hector['isMarried'] = true;
console.log(hector);
