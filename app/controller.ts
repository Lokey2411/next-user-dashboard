import { Address } from "./types/user";

export const createPage = <T = any>(data: T[], firstItemIndex: number, numItem: number = 10) => {
	let result = [];
	for (let i = firstItemIndex; i < firstItemIndex + numItem; i++) {
		result.push(data[i]);
	}
	return result;
};

export const getAddress = (address: Address) => {
	return `${address.address}, ${address.state}, ${address.city}`;
};
