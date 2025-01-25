/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import SearchBar from "./SearchBar";
import Menu from "./Menu";

const Navbar = () => {
	const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleMenuToggle = () => {
		setIsSearchBarOpen((prev) => !prev); // Toggle the state to show/hide the search bar
	};
	const handleNavToggle = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<header className="bg-[#0d1e53] text-white max-w-auto mx-auto py-5 px-[20px] sm:px-[40px] md:px-[40px]  ">
			<nav className="flex justify-between items-center 2xl:w-[80%] mx-auto">
				{/* Hamburger menu icon (hidden on larger screens) */}
				{isMenuOpen && (
					<Menu
						setIsMenuOpen={setIsMenuOpen}
						isMenuOpen={isMenuOpen}
					/>
				)}
				{isMenuOpen ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="ionicon cursor-pointer lg:hidden transform transition-transform duration-300 hover:scale-125 invisible"
						viewBox="0 0 512 512"
						style={{ width: "25px", height: "25px" }}
						onClick={handleNavToggle}
					>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
							d="M368 368L144 144M368 144L144 368"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="ionicon cursor-pointer lg:hidden transform transition-transform duration-300 hover:scale-125"
						viewBox="0 0 512 512"
						style={{ width: "25px", height: "25px" }}
						onClick={handleNavToggle}
					>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeMiterlimit="10"
							strokeWidth="32"
							d="M80 160h352M80 256h352M80 352h352"
						/>
					</svg>
				)}

				{/* Conditional rendering of Search Bar */}
				{isSearchBarOpen && (
					<SearchBar
						toggleSearchBar={handleMenuToggle}
						setIsSearchBarOpen={setIsSearchBarOpen}
						isSearchBarOpen={isSearchBarOpen}
					/>
				)}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="ionicon hidden cursor-pointer lg:block"
					viewBox="0 0 512 512"
					style={{ width: "25px", height: "25px" }}
					onClick={handleMenuToggle}
				>
					<path
						d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
						fill="none"
						stroke="currentColor"
						strokeMiterlimit="10"
						strokeWidth="32"
					/>
					<path
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeMiterlimit="10"
						strokeWidth="32"
						d="M338.29 338.29L448 448"
					/>
				</svg>
				<a href="/" className="text-2xl font-bold">
					ABC Nutrition
				</a>
				{/* Icons on the right */}
				<div className="flex gap-5">
					{/* Search icon for small screens */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="ionicon sm:block cursor-pointer lg:hidden"
						viewBox="0 0 512 512"
						style={{ width: "25px", height: "25px" }}
						onClick={handleMenuToggle} // Toggle search bar visibility
					>
						<path
							d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
							fill="none"
							stroke="currentColor"
							strokeMiterlimit="10"
							strokeWidth="32"
						/>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeMiterlimit="10"
							strokeWidth="32"
							d="M338.29 338.29L448 448"
						/>
					</svg>

					{/* Person icon */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="ionicon hidden cursor-pointer md:block"
						viewBox="0 0 512 512"
						style={{ width: "25px", height: "25px" }}
					>
						<path
							d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="32"
						/>
						<path
							d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
							fill="none"
							stroke="currentColor"
							strokeMiterlimit="10"
							strokeWidth="32"
						/>
					</svg>

					{/* Bag icon */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="ionicon cursor-pointer"
						viewBox="0 0 512 512"
						style={{ width: "25px", height: "25px" }}
					>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="32"
							d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
						/>
					</svg>
				</div>
				{/* Navigation links (hidden on smaller screens) */}
			</nav>
		</header>
	);
};

export default Navbar;
