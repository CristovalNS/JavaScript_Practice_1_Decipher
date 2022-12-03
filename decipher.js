function digitalDecipher(eMessage, key){
	for(let i = 0; i < eMessage.length; i++){
        key_index = i % key.toString().length;
		eMessage[i] -= parseInt(key.toString()[key_index]);
        // console.log(key_index); // Testing key index    
	}

    	// console.log(eMessage); // Testing deciphered eMessage numbers
	const alpha = '0abcdefghijklmnopqrstuvwxyz';

	let decipher = '';

	for(let i = 0; i < eMessage.length; i++){
		decipher = decipher.concat(alpha[eMessage[i]]);
	}
	return decipher;
}

console.log("Testing output result:")
console.log("Code [20, 12, 18, 30, 21] with key 1939:", digitalDecipher([20, 12, 18, 30, 21], 1939));
console.log("Code [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8] with key 1939:", digitalDecipher([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939));
