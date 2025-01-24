/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchBar = ({ toggleSearchBar }) => {
	const [focused, setFocused] = useState(false);
	const [inputValue, setInputValue] = useState(""); // Track the input's value

	return (
		<div className="bg-[#0d1e53] py-6 px-10 flex gap-1 justify-center items-center text-white absolute top-0 left-0 w-full z-10  font-poppins animate-slide-in">
			{/* Search Input Section */}
			<div className="relative">
				{/* input field with its styles and placeholder */}
				<input
					type="text"
					placeholder="Search"
					className="w-full sm:w-120 md:w-170 p-2 pl-6 pr-12 pt-5 border-2 rounded-4xl outline-0 focus:outline-none text-white placeholder-transparent peer font-poppins"
					style={{ fontFamily: "Poppins, sans-serif" }}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
				/>

				{/* label that moves when input is focused or has content */}
				<label
					htmlFor="search-input"
					className={`absolute left-5 top-1/2 transform -translate-y-1/2 text-white transition-all duration-300 ${
						// Check if the input is focused or has text in it
						focused || inputValue.length > 0
							? "top-3 text-[15px] opacity-70 translate-y-[-10px] scale-75" // Moves label up and reduces its size
							: ""
					}`}
					style={{ fontFamily: "Poppins, sans-serif" }}
				>
					Search
				</label>

				{/* Search Icon inside the input at the end */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="ionicon absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
					viewBox="0 0 512 512"
					style={{ width: "20px", height: "20px", color: "white" }}
				>
					{/* Path for the magnifying glass icon */}
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

			{/* Icon for closing the search bar */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="ionicon cursor-pointer"
				viewBox="0 0 512 512"
				style={{ fontFamily: "Poppins, sans-serif", width: "25px" }}
				onClick={toggleSearchBar} // Trigger toggle function when clicked
			>
				{/* Path for the close (X) icon */}
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
