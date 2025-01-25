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

const NavigationMenu = () => {
	return (
		<nav className="bg-[#0D1E53] p-8 hidden lg:block">
			<ul className="flex flex-wrap gap-7 text-[#eff0f5] text-[16.7px] justify-center items-center">
				{menuItems.map((navlink, index) => {
					// Dynamically generate the href
					const href = `#${navlink.toLowerCase().replace(/ /g, "-")}`; // Convert to lowercase and replace spaces with dashes
					return (
						<li key={index} className="cursor-pointer">
							<a
								href={href}
								className="hover:underline focus:underline"
							>
								{navlink}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavigationMenu;
