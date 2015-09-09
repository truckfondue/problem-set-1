function letterCapitalize(str) {
	var arr = str.split(' '), arrHelper = []

	for (var i = 0; i < arr.length; i++) {
		arrHelper.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
	};
	return arrHelper.join(' ')
}

function wordCount(str) {
	return str.split(' ').length
}

function primeTime(n) {
	if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 	if (n%2==0) return (n==2);
 	if (n%3==0) return (n==3);
	var m=Math.sqrt(n);
 		for (var i=5;i<=m;i+=6) {
	  		if (n%i==0)     return false;
	  		if (n%(i+2)==0) return false;
 	}
 	return true;
}
