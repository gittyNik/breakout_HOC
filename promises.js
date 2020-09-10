// Promises

const promiseFunction = function (value) {
	return new Promise(function (resolve, reject) {
		if (value === "resolve") {
			return resolve("Inside Resolve block");
		} else {
			return reject("Inside reject block");
		}
	});
};

// promise chaining



promiseFunction("resolvefgfh")
	.then(function (data) {
		console.log(`!!!!!!!!`, data);
	})
	.catch(function(err) {
		console.log(`+++++++++`, err);
	});

// promiseFunction("did not resolve")
// 	.then(data => ({ data, resolved: true }))
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch(err => {
// 		let obj = {
// 			err,
// 			resolve: false
// 		};
// 		console.log(obj);
// 	});
