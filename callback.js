// Callback

// const cback = function(val, cb) {
// 	setTimeout(() => cb(val), 2000);
// };

// cback(true, val => {
// 	console.log(`Val is `, val);
// });


// setTimeout(cb, timeDuration)
// secondaryFN(cb);

// console.log(`After 5 seconds`);


function cb (st) {
	console.log(st)
}


function mainFunction() {
	console.log("In main function")
	secondaryFN(cb);
}

function secondaryFN(callback) {
	console.log("Inside  secondary fn")
	var cbString = "inside Callback function"
	// secondaryFN(cb);
	callback(cbString);
}

mainFunction()

// Function will complete its own set of tasks - Cause the delay(specified by timeDuration argument)
// Calls callback  function - Function provided by us as first argument

setTimeout(() => resolve("REturned value"), 5000)