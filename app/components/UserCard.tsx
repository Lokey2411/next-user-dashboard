/* eslint-disable @next/next/no-img-element */
import React from "react";
import { User } from "../types/user";
import KeyValueField from "./InnerField";

type Props = {
	isSelect?: boolean;
	onClick?: () => void;
} & User;

const UserCard = (props: Props) => {
	return (
		<div
			className={` w-[360px] ${props.isSelect ? "bg-gradient-card" : "bg-gradient-radial"} cursor-pointer hover:opacity-70 rounded-lg p-2 m-3`}
			onClick={props.onClick}
		>
			{/* headers */}
			<div className="flex items-center w-full">
				<img
					src={props.image}
					alt="avatar"
					className="rounded-full w-[60px] h-[60px] object-cover "
				/>
				<div className="ml-2">
					<h1 className="text-xl font-semibold">
						{props.firstName} {props.lastName}
					</h1>
					<p className="text-lg">{props.email}</p>
					<KeyValueField
						title="Company"
						value={`${props.company.name}`}
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

export default UserCard;
