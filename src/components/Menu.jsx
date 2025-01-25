import { useEffect, useState } from "react";

const menuItems = [
	"Home",
	"Catalog",
	"Bundles",
	"Protein Powder",
	"BCAAS",
	"Creatine",
	"Plant Based",
	"Activewear",
	"Accessories",
	"About Us",
	"Reviews",
];

const Menu = ({ setIsMenuOpen, isMenuOpen }) => {
	const [isClosed, setIsClosed] = useState(false);

	useEffect(() => {
		// Event listener for detecting clicks outside the menu
		const handleOutsideClick = (e) => {
			if (e.target.classList.contains("overlay")) {
				setIsClosed(true); // Trigger closing animation

				// Set isMenuOpen to false after the animation finishes
				setTimeout(() => {
					setIsMenuOpen(false);
				}, 470); // Match with the duration of your closing animation
			}
		};

		// Add the event listener
		document.addEventListener("click", handleOutsideClick);

		// Cleanup the event listener on component unmount
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [setIsMenuOpen]); // Add setIsMenuOpen to the dependency array

	const handleCloseMenu = () => {
		setIsClosed(true); // Trigger closing animation
		setTimeout(() => {
			setIsMenuOpen(false); // Close the menu after the animation
		}, 470); // Match this with the closing animation duration
	};

	return (
		<>
			{/* Overlay */}
			<div className="overlay bg-black h-[100vh] absolute inset-0 -z-10 opacity-20 lg:hidden"></div>

			{/* Close icon (X) */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="ionicon cursor-pointer lg:hidden transform transition-transform duration-300 hover:scale-125 absolute top-6 left-10 animate-slide-in-left-to-right"
				viewBox="0 0 512 512"
				style={{ width: "25px", height: "25px" }}
				onClick={handleCloseMenu}
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

			{/* Menu Items */}
			<ul
				className={`absolute left-0 text-[19px] gap-2 top-0 -z-10 flex flex-col text-white bg-[#0d1e53] w-[70%] sm:w-[65%] justify-center h-[100vh] lg:hidden ${
					isClosed
						? "animate-slide-in-right-to-left" // Closing animation
						: "animate-slide-in-left-to-right" // Opening animation
				}`}
			>
				{menuItems.map((item, index) => (
					<li
						key={index}
						className="hover:bg-[#162354] p-2 pl-10 cursor-pointer"
					>
						<a href="/" className="block">
							{item}
						</a>
					</li>
				))}
			</ul>
		</>
	);
};

export default Menu;
