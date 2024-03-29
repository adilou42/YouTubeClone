"use client";

import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import React, { useState } from "react";
import Button from "../components/Button";

const PageHeader = () => {
	const [showSearchBar, setShowSearchBar] = useState(false);

	return (
		<div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
			<div
				className={`gap-4 items-center flex-shrink-0 ${
					showSearchBar ? "hidden" : "flex"
				}`}
			>
				<Button variant="ghost">
					<Menu />
				</Button>
				<a href="/">
					<h1 className="h-6">YouTube Clone</h1>
				</a>
			</div>
			<form
				className={`gap-4 flex-grow justify-center ${
					showSearchBar ? "flex" : "hidden md:flex"
				}`}
			>
				{showSearchBar && (
					<Button
						onClick={() => setShowSearchBar(false)}
						type="button"
						size="icon"
						variant="ghost"
						className="flex-shrink-0"
					>
						<ArrowLeft />
					</Button>
				)}
				<div className="flex flex-grow max-w-[600px]">
					<input
						type="search"
						placeholder="Search"
						className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
					/>
					<Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
						<Search />
					</Button>
				</div>
				<Button type="button" size="icon" className="flex-shrink-0">
					<Mic />
				</Button>
			</form>
			<div
				className={`flex-shrink-0 md:gap-2 ${
					showSearchBar ? "hidden" : "flex"
				}`}
			>
				<Button
					onClick={() => setShowSearchBar(true)}
					size="icon"
					variant="ghost"
					className="md:hidden"
				>
					<Search />
				</Button>
				<Button size="icon" variant="ghost" className="md:hidden">
					<Mic />
				</Button>
				<Button size="icon" variant="ghost">
					<Upload />
				</Button>
				<Button size="icon" variant="ghost">
					<Bell />
				</Button>
				<Button size="icon" variant="ghost">
					<User />
				</Button>
			</div>
		</div>
	);
};

export default PageHeader;
