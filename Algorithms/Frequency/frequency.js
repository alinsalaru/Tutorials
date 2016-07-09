/* Given an array of integers `n`,
 * display the frequency of the elements in the array, having the elements sorted.
 * Throw an exception if `s` is invalid.
 * What complexity does your implementation have? Do you think there is a better one?
 * input                                ==>   output
 * [2,3,5,1,3,3,1,4,5,6,4,2,1,3,1,5]    ==>   1: 4
 *                                            2: 2
 *                                            3: 4
 *                                            4: 2
 *                                            5: 3
 *                                            6: 1
*/

function frequency(arr) {

	let frequencyArr= Array(arr.length).fill(0);

	frequencyArr.forEach((x,i,array)=> array[arr[i]]++);

	frequencyArr = frequencyArr.filter(x=>{
		if(x!==0) { return true; }
	});

	return frequencyArr;
}

frequency([1,1,1,1,4,4,4,2,2,2]);
