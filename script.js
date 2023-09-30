function firstNonRepeatedChar(str) {
 // Write your code here
	let obj = {};
	for (let i = 0; i < str.length; i++) {
		if(obj[str[i]]!==undefined){ //this is to check if the char is a string
			obj[str[i]]+=1;
		}else{
			obj[str[i]]=1;
			
		}
	}
	for (let i = 0; i < str.length; i++) {
		if(obj[str[i]]==1)return str[i];
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
