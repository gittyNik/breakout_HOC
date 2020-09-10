// pr, when invoked, waits for 5 secs and then returns "REturned value"
const pr = new Promise((resolve, reject) =>
	setTimeout(() => resolve("REturned value"), 5000)
);

// async await
function test() {
	console.log("Before async call")
	let val =  pr;
	console.log(`Value returned by call to async function `, val);
	console.log("After async call")
}

test();


// async function test() {
// 	let a;
// 	await setTimeout(async () => {
// 		a = 5;
// 		console.log("Inside function");
// 	}, 5000);

// 	console.log(`value of a = `, a);
// }

// test();
