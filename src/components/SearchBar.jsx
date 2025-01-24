import { useEffect, useState } from "react";

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

	return (
		<div
			className={`search-bar bg-[#0d1e53] py-6 px-10 flex gap-1 justify-center items-center text-white absolute top-0 left-0 w-full z-10 font-poppins ${
				isClosed ? "animate-slide-out" : "animate-slide-in"
			}`}
		>
			<div className="relative">
				<input
					type="text"
					placeholder="Search"
					className="w-full sm:w-120 md:w-170 p-2 pl-6 pr-12 pt-5 border-2 rounded-4xl outline-0 focus:outline-none text-white placeholder-transparent peer font-poppins"
					style={{ fontFamily: "Poppins, sans-serif" }}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
				/>
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="ionicon absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
					viewBox="0 0 512 512"
					style={{ width: "20px", height: "20px", color: "white" }}
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
			</div>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="ionicon cursor-pointer"
				viewBox="0 0 512 512"
				style={{ fontFamily: "Poppins, sans-serif", width: "25px" }}
				onClick={() => {
					setIsClosed(true); // Trigger the slide-out animation
					setTimeout(() => {
						toggleSearchBar();
						setIsSearchBarOpen(false); // Close the search bar after the animation
					}, 500); // Ensure the slide-out animation completes before closing
				}}
			>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="32"
					d="M368 368L144 144M368 144L144 368"
				/>
			</svg>
		</div>
	);
};

export default SearchBar;
