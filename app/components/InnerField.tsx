import React from "react";

const KeyValueField = ({ title, value, center }: { title: string; value: string; center?: boolean }) => {
	return (
		<p className={`text-lg flex w-full  ${center && "justify-center"} text-left`}>
			<b className="font-semibold">{title}: </b>
			{value}
		</p>
	);
};

export default KeyValueField;
