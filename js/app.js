'use strict';

crush = ['crush1', 'crush2', 'crush3']
location = ['location1', 'location2', 'location3']
car = ['uInput1', 'uInput2', 'uInput3',]
job = ['uInput1', 'uInput2', 'uInput3']


const gameObj = {
    crush: [],
    locaton: [],
    car: [],
    job: [],
    Tally: 0,

    start: function (){

    }
}

const form = document.querySelector('form');
form.addEventListener('submit', function() {
    event.preventDefault();
    const crush = this.crush1.value;
    const location = this.location1.value;
    const car = this.car1.value;
    const job = this.job1.value;
console.log(crush, location, car, job)

});