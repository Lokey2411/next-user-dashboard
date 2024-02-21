"use client";
import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { data } from "./data";
import { createPage } from "./controller";
import { User } from "./types/user";
import SectionUser from "./components/SectionUser";

export default function Home() {
	const [displayItems, setDisplayItems] = useState<User[]>(createPage<User>(data.users, 0));
	const numPage = data.users.length / 10;
	let pages = [];
	for (let i = 0; i < numPage; i++) {
		pages.push(i + 1);
	}
	const [currentPage, setCurrentPage] = useState(1);
	const [currentUser, setCurrentUser] = useState(0);
	// handle change page
	function handleChangePage(page: number) {
		setDisplayItems(createPage(data.users, ((page + numPage - 1) % numPage) * displayItems.length));
		setCurrentPage(page);
	}
	useEffect(() => {
		console.log(displayItems);
	}, [displayItems]);
	// handle select user
	const handleSelectUser = (id: number) => {
		setCurrentUser(currentUser === id ? 0 : id);
	};
	const isSelected = currentUser > 0;
	return (
		<main className="bg-gradient w-full">
			<h1 className="text-3xl font-semibold ml-2">Users Dashboard </h1>
			{/* container */}
			<div className="mx-6 flex">
				<div className={`${isSelected ? "w-1/3" : "w-full"} w-fit h-fit`}>
					<div className="flex flex-wrap w-full overflow-y-auto h-screen ">
						{displayItems?.map((user, index) => (
							<UserCard
								isSelect={currentUser === user.id}
								onClick={() => handleSelectUser(user.id)}
								{...user}
								key={index}
							/>
						))}
					</div>
					{/* Pages */}
					<div className="flex justify-center">
						{pages.map((item) => (
							<div
								key={item}
								className={`flex justify-center w-6 h-6 m-3 cursor-pointer rounded-full hover:bg-gray-600 hover:text-white ${currentPage === item ? "bg-gray-600 text-white" : ""}`}
								onClick={() => handleChangePage(item)}
							>
								<p>{item}</p>
							</div>
						))}
					</div>
				</div>
				{/* Section user */}
				{currentUser > 0 && <SectionUser {...data.users[currentUser - 1]} />}
			</div>
		</main>
	);
}
