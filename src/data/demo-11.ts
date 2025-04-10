const list = [
  ['Aenean quam ornare. Curabitur blandit.', 'Nullam quis risus eget urna mollis ornare.'],
  ['Etiam porta euismod malesuada mollis.', 'Vivamus sagittis lacus vel augue rutrum.']
];

const facts = [
  { id: 1, amount: 7518, title: 'Completed Projects' },
  { id: 2, amount: 3472, title: 'Satisfied Customers' },
  { id: 3, amount: 2184, title: 'Expert Employees' },
  { id: 4, amount: 4523, title: 'Awards Won' }
];

const blogList = [
	{
		id: 1,
		category: "Coding",
		date: "14 Apr 2022",
		image: "pc1",
		title: "Bitumen",
		description: `Bitumen is a black, sticky, and highly viscous form of petroleum. It’s typically found in natural deposits, like tar sands, or produced as a byproduct of crude oil refining. Bitumen is primarily made up of hydrocarbons and is commonly used in road construction, roofing, and waterproofing.`,
	},
	{
		id: 2,
		category: "Workspace",
		date: "29 Mar 2022",
		image: "pc2",
		title: "Coal",
		description: `Coal is a black or brownish-black sedimentary rock primarily composed of carbon, along with various other elements like hydrogen, sulfur, oxygen, and nitrogen. It forms from the remains of plant material that has been subjected to heat and pressure over millions of years, typically in swampy, wet environments.`,
	},
	{
		id: 3,
		category: "Meeting",
		date: "26 Feb 2022",
		image: "pc3",
		title: "Gas Oil",
		description: `Gas Oil is a middle distillate liquid refined from crude oil. It has many different names such as diesel and a variety of uses. Gas Oil is a “dual purpose” fuel. It has a high calorific value (heat content) and is thus recommended as a boiler fuel in industrial or agricultural installations with pressure jet burners e.g. grain dryers.`,
	},
	{
		id: 4,
		category: "Business Tips",
		date: "7 Jan 2022",
		image: "pc4",
		title: "Petcoke",
		description: `Petroleum coke, abbreviated coke or pet coke, is a final carbon-rich solid material that derives from oil refining and is one type of the group of fuels referred to as cokes. Pet coke is the coke that, in particular, derives from a final cracking process, a thermo-based chemical engineering process that splits long chain hydrocarbons of petroleum into shorter chains. `,
	},
	{
		id: 5,
		category: "Business Tips",
		date: "7 Jan 2022",
		image: "pc5",
		title: "Fuel Oil",
		description: `Fuel Oil is a fraction obtained from petroleum distillation, either as a distillate or a residue. Broadly speaking, Oil is any liquid petroleum product, which is burned in a furnace or boiler for the generation of heat or used in an engine for the generation of power, except oils having a flash point of approximately 40 oC (104 o F). `,
	},
	{
		id: 6,
		category: "Business Tips",
		date: "7 Jan 2022",
		image: "pc6",
		title: "Naphtha",
		description: `Petroleum naphtha is an intermediate hydrocarbon liquid stream derived from the refining of crude oil with CAS-no 64742-48-9. It is most usually desulfurized and then catalytically reformed, which rearranges or restructures the hydrocarbon molecules in the naphtha as well as breaking some of the molecules into smaller molecules to produce a high-octane component of gasoline (or petrol).`,
	},
	{
		id: 7,
		category: "Business Tips",
		date: "7 Jan 2022",
		image: "pc7",
		title: "Crude Oil",
		description: `Crude oil is a naturally occurring, unrefined petroleum product composed of hydrocarbon deposits and other organic materials. A type of fossil fuel, crude oil can be refined to produce usable products such as gasoline, diesel and various forms of petrochemicals. `,
	},
	{
		id: 8,
		category: "TMT Steel",
		date: "7 Jan 2022",
		image: "pc8",
		title: "TMT Steel",
		description: `TMT (Thermo-Mechanically Treated) steel is a high-strength reinforcement bar widely used in construction projects due to its superior strength, flexibility, and durability. The manufacturing process of TMT steel involves passing hot steel billets through a series of rolling mills, followed by controlled water quenching. `,
	},
];

const teams = [
  {
    id: 1,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    image: { '1x': '/img/avatars/t1.jpg', '2x': '/img/avatars/t1@2x.jpg 2x' }
  },
  {
    id: 2,
    name: 'Cory Zamora',
    designation: 'Marketing Specialist',
    image: { '1x': '/img/avatars/t2.jpg', '2x': '/img/avatars/t2@2x.jpg 2x' }
  },
  {
    id: 3,
    name: 'Nikolas Brooten',
    designation: 'Sales Manager',
    image: { '1x': '/img/avatars/t3.jpg', '2x': '/img/avatars/t3@2x.jpg 2x' }
  },
  {
    id: 4,
    name: 'Jackie Sanders',
    designation: 'Investment Planner',
    image: { '1x': '/img/avatars/t4.jpg', '2x': '/img/avatars/t4@2x.jpg 2x' }
  }
];

const testimonialList = [
  {
    id: 1,
    name: 'Coriss Ambady',
    image: '/img/avatars/te7.jpg',
    designation: 'Financial Analyst',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
  },
  {
    id: 2,
    name: 'Cory Zamora',
    image: '/img/avatars/te8.jpg',
    designation: 'Marketing Specialist',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
  },
  {
    id: 3,
    name: 'Barclay Widerski',
    image: '/img/avatars/te9.jpg',
    designation: 'Sales Specialist',
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio.`
  }
];

const faq = [
  {
    id: 1,
    title: 'Can I cancel my subscription?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  },
  {
    id: 2,
    title: 'Which payment methods do you accept?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  },
  {
    id: 3,
    title: 'How can I manage my Account?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  },
  {
    id: 4,
    title: 'Is my credit card information secure?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.`
  }
];

export { list, facts, blogList, teams, testimonialList, faq };
