/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import SearchIcon from "../assets/images/search-outline.svg";
import PersonIcon from "../assets/images/person-outline.svg";
import BagIcon from "../assets/images/bag-outline.svg";
import HamburgerIcon from "../assets/images/menu-outline.svg";

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
		<header className="bg-[#0d1e53] text-white max-w-auto mx-auto py-5 px-[20px] sm:px-[40px] md:px-[40px]">
			<nav className="flex justify-between items-center 2xl:max-w-[65%] mx-auto">
				{/* Hamburger menu icon (hidden on larger screens) */}
				{isMenuOpen && (
					<Menu
						setIsMenuOpen={setIsMenuOpen}
						isMenuOpen={isMenuOpen}
					/>
				)}
				<img
					src={HamburgerIcon}
					alt="Open Menu"
					className={`cursor-pointer lg:hidden transform transition-transform duration-300 hover:scale-125 ${
						isMenuOpen && "invisible"
					}`}
					style={{ width: "25px", height: "25px" }}
					onClick={handleNavToggle}
				/>
				{/* Conditional rendering of Search Bar */}
				{isSearchBarOpen && (
					<SearchBar
						toggleSearchBar={handleMenuToggle}
						setIsSearchBarOpen={setIsSearchBarOpen}
						isSearchBarOpen={isSearchBarOpen}
					/>
				)}
				<img
					src={SearchIcon}
					alt="Search Icon"
					className="hidden cursor-pointer lg:block"
					style={{ width: "25px", height: "25px" }}
					onClick={handleMenuToggle}
				/>
				<a href="/" className="text-2xl font-bold">
					Athlene Nutrition
				</a>
				{/* Icons on the right */}
				<div className="flex gap-5">
					{/* Search icon for small screens */}
					<img
						src={SearchIcon}
						alt="Search Icon"
						className="sm:block cursor-pointer lg:hidden"
						style={{ width: "25px", height: "25px" }}
						onClick={handleMenuToggle} // Toggle search bar visibility
					/>

					{/* Person icon */}
					<img
						src={PersonIcon}
						alt="Person Icon"
						className="hidden cursor-pointer md:block"
						style={{ width: "25px", height: "25px" }}
					/>

					{/* Bag icon */}
					<img
						src={BagIcon}
						alt="Bag Icon"
						className="cursor-pointer"
						style={{ width: "25px", height: "25px" }}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
