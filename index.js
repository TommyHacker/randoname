const { names } = require('./seeds');
const randomName = () => {
	//get array length and - 1 for index lookup
	const arrLength = names.length - 1;
	//generate random index within array boundries
	const num = Math.floor(Math.random() * arrLength);
	//output random name from imported array
	return names[num];
};
console.log(randomName());

module.exports = randomName;
