const Menu = () => {
	return (
		<>
			<div className="bg-black h-[100vh] absolute inset-0 -z-10 opacity-20 lg:hidden"></div>
			<ul className="absolute left-0 pl-10 text-[19px] gap-5 top-0 -z-10 flex flex-col text-white bg-[#0d1e53] w-[50%] justify-center h-[100vh] lg:hidden">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">Catalog</a>
				</li>
				<li>
					<a href="/">Bundles</a>
				</li>
				<li>
					<a href="/">Protein Powder</a>
				</li>
				<li>
					<a href="/">BCAAS</a>
				</li>
				<li>
					<a href="/">Creatine</a>
				</li>
				<li>
					<a href="/">Plant Based</a>
				</li>
				<li>
					<a href="/">Activewear</a>
				</li>
				<li>
					<a href="/">Accessories</a>
				</li>
				<li>
					<a href="/">About Us</a>
				</li>
				<li>
					<a href="/">Reviews</a>
				</li>
			</ul>
		</>
	);
};

export default Menu;
