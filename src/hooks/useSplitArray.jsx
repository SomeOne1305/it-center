export default function useSplitArray(arr) {
	if (arr) {
		const middleIndex = Math.ceil(arr.length / 2);
		const firstArray = arr.slice(0, middleIndex);
		const secondArray = arr.slice(middleIndex);
		return [firstArray, secondArray];
	}
}
