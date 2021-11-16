const timer = (times) => {
  for (let i = 0; i < times.length; i++) {
    if (times[i] > 0) { // ignore/skip negative numbers
      let timeOut = times[i] * 1000; // set delay to equal the given "alarm" argument
      setTimeout(() => {
        process.stdout.write('\x07'); // beep!
      }, timeOut);
    }
  }
};

let argvArray = process.argv.slice(2); // convert command line arguments to an array (removing 'node' & file name)

let alarmArray = argvArray.map(i => parseInt(i)); // convert array of strings to an array of numbers

let times = alarmArray.filter(x => { // remove NaN values from array
  return !Number.isNaN(x);
});

timer(times);