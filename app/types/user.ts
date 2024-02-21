import { data } from "../data";

export type User = (typeof data.users)[0];

export type Address = {
	coordinates: {
		lat: number;
		lng: number;
	};
	address: string;
	city: string | undefined;
	state: string;
	postalCode: string;
};
