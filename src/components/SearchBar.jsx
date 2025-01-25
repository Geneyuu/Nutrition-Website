import { useEffect, useState } from "react";
import SearchIcon from "../assets/images/search-outline.svg";
import CloseIcon from "../assets/images/close-outline.svg";

const SearchBar = ({ toggleSearchBar, setIsSearchBarOpen }) => {
	const [focused, setFocused] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [isClosed, setIsClosed] = useState(false); // Track if the search bar is closing

	const handleOnBlur = () => {
		setFocused(false);
	};

	const handleOnFocus = () => {
		setFocused(true);
	};

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (!e.target.closest(".search-bar") && !focused) {
				setIsClosed(true); // Trigger the slide-out animation
				setTimeout(() => setIsSearchBarOpen(false), 500); // Close the search bar after animation
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [focused, setIsSearchBarOpen]);

	const handleSearchSubmit = (e) => {
		e.preventDefault(); // Prevent form submit action (if any)
		// Handle the search action here if needed
	};

	return (
		<div
			className={`search-bar bg-[#0d1e53] py-6 px-10 flex gap-1 justify-center items-center text-white absolute top-0 left-0 w-full z-10 font-poppins ${
				isClosed ? "animate-slide-out" : "animate-slide-in"
			}`}
		>
			{/* Form wrapper */}
			<form
				className="relative items-center"
				onSubmit={handleSearchSubmit}
			>
				{/* Input field */}
				<input
					type="text"
					placeholder="Search"
					className="w-full sm:w-120 md:w-170 p-2 pl-6 pr-12 pt-5 border-2 rounded-4xl outline-0 focus:outline-none text-white placeholder-transparent font-poppins"
					style={{ fontFamily: "Poppins, sans-serif" }}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					id="search-input"
				/>

				{/* Label for input */}
				<label
					htmlFor="search-input"
					className={`absolute left-5 top-1/2 transform -translate-y-1/2 text-white transition-all duration-300 ${
						focused || inputValue.length > 0
							? "top-3 text-[15px] opacity-70 translate-y-[-10px] scale-75"
							: ""
					}`}
					style={{ fontFamily: "Poppins, sans-serif" }}
				>
					Search
				</label>

				{/* Search Icon as submit button */}
				<button
					type="submit"
					className="absolute right-5 top-1/2 transform -translate-y-1/2"
				>
					<img
						src={SearchIcon}
						alt="Search Icon"
						className="cursor-pointer"
						style={{ width: "20px", height: "20px" }}
					/>
				</button>
			</form>

			{/* Close Icon */}
			<img
				src={CloseIcon}
				alt="Close Icon"
				className="cursor-pointer"
				style={{ width: "25px" }}
				onClick={() => {
					setIsClosed(true); // Trigger the slide-out animation
					setTimeout(() => {
						toggleSearchBar();
					}, 500);
				}}
			/>
		</div>
	);
};

export default SearchBar;
