/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Address, User } from "../types/user";
import { getAddress } from "../controller";
import KeyValueField from "./InnerField";

type Props = {} & User;

const SectionUser = (props: Props) => {
	return (
		<div className="w-full bg-gray-200 p-2 rounded-lg mx-6">
			{/* headers */}
			<div className="flex flex-col  w-full items-center border-b p-3 text-center">
				<img
					src={props.image}
					alt="avatar"
					className="rounded-full w-[100px] h-[100px] object-cover border border-black"
				/>
				<div className="ml-2 flex flex-col items-start">
					<h1 className="text-2xl font-semibold">
						{props.firstName} {props.lastName}
					</h1>
					<KeyValueField
						title="Address"
						value={getAddress(props.address)}
					/>
					<KeyValueField
						title="Age"
						value={`${props.age}`}
					/>
				</div>
			</div>
			{/* body */}
			<div className="">
				{/* card */}
				<h1 className="text-xl font-bold">Card</h1>
				<div className="mx-2">
					<KeyValueField
						title="Number"
						value={props.bank.cardNumber}
					/>
					<KeyValueField
						title="Type"
						value={props.bank.cardType}
					/>
					<KeyValueField
						title="Expire"
						value={props.bank.cardExpire}
					/>
				</div>
				{/* company */}
				<h1 className="text-xl font-bold">Company</h1>
				<div className="mx-2">
					<KeyValueField
						title="Name"
						value={props.company.name}
					/>
					<KeyValueField
						title="Address"
						value={getAddress(props.company.address as Address)}
					/>
					<KeyValueField
						title="Department"
						value={props.company.department}
					/>
				</div>
			</div>
		</div>
	);
};

export default SectionUser;
