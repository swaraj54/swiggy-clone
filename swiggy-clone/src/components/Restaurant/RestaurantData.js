const restaurant = [
  {
    name: "The Ora Cafe",
    cat: "North Indian, Beverages",
    rating: "4.0",
    time: "25 mins",
    avgPrice: "₹ 200 Cost for two",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rh1kpotnhdlbfruwgn2c",
    address: "Bhilwara, Sanjay Colony",
  },
  {
    name: "Mirchi Restaurant",
    cat: "North Indian",
    rating: "3.9",
    time: "20 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/povypukzcottzmhmy4fy",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Hot Pizza",
    cat: "Italian, Pizzas",
    rating: "3.9",
    time: "23 MINS",
    avgPrice: "₹201 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/onrussybboydf7hpidkr",
    address: "Old Bhilwara, Old Bhilwara",
  },
  {
    name: "Bholenath Pizza Centre",
    cat: "Fast Food, Pizzas",
    rating: "4.2",
    time: "35 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gyfr4kyppruesvoecmdl",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Kanha ji daal bati",
    cat: "Indian",
    rating: "4.2",
    time: "26 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xary7u2zjewtkwpnjyll",
    address: "Old Bhilwara, Old Bhilwara",
  },
  {
    name: "Asha Restaurant",
    cat: "North Indian, South Indian, Chinese, Snacks",
    rating: "4.5",
    time: "22 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vczeztxo1wpk9pqxiucq",
    address: "Old Bhilwara, Shastri Nagar",
  },
  {
    name: "Eating Seating",
    cat: "Fast Food",
    rating: "3.9",
    time: "22 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fn3rq0hstxf30n5wdrbv",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Mahalaxmi Bakers",
    cat: "North Indian, Desserts",
    rating: "4.0",
    time: "17 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r0q2nzue0zgjl8xd2bzv",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Sonu Patties",
    cat: "American, Fast Food, Pizzas, Snacks, Beverages",
    rating: "3.6",
    time: "21 MINS",
    avgPrice: "₹149 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dmwpvksmmgezvmrdxrvm",
    address: "Old Bhilwara, Old Bhilwara",
  },
  {
    name: "Hangout",
    cat: "Chinese, South Indian, North Indian, Continental, Fast Food",
    rating: "3.7",
    time: "20 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/l3clh7uogyqu8b4igg9r",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Angeethi Restaurant (Hotel Ashoka Residency)",
    cat: "Desserts, Thai",
    rating: "3.1",
    time: "24 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vejmtuy9txuwelm0xeba",
    address: "Bhilwara, Shastri Nagar",
  },
  {
    name: "Mateshwari Falhari Center",
    cat: "Snacks, Fast Food",
    rating: "4.5",
    time: "18 MINS",
    avgPrice: "₹100 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xdhojkajxdugzfwi0wdc",
    address: "Old Bhilwara, Shastri Nagar",
  },
  {
    name: "Hotel Raza",
    cat: "Mughlai",
    rating: "3.2",
    time: "20 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bqmuzk3g1kqyadrqgcxb",
    address: "Bhilwara, Old Bhilwara",
  },
  {
    name: "Bikaner Family Restaurant",
    cat: "North Indian",
    rating: "3.2",
    time: "23 MINS",
    avgPrice: "₹220 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jecyl9m4vuwbolvrorua",
    address: "Old Bhilwara, Azad Nagar",
  },
  {
    name: "City Hart momos",
    cat: "Snacks, Fast Food",
    rating: "4.5",
    time: "29 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aoiedyp0xbdjphnflmwt",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "INOX",
    cat: "Fast Food",
    rating: "4.5",
    time: "24 MINS",
    avgPrice: "₹400 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b1fv0tsksuat0z34pmrp",
    address: "Bhilwara, Gandhi Nagar",
  },
  {
    name: "SM Maggi n pasta",
    cat: "Fast Food, Pastas",
    rating: "4.5",
    time: "23 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/txxyx0ehqvmznwavmjtz",
    address: "BHILWARA, R K Colony",
  },
  {
    name: "Jodhpur Sweets",
    cat: "Desserts, Snacks",
    rating: "4.1",
    time: "16 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nxmmra9fydoaqprkrtqv",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Chalta Firta Restaurant",
    cat: "North Indian, Rajasthani",
    rating: "4.5",
    time: "31 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xg0vcdztyvdxjbxkswsf",
    address: "Old Bhilwara, Shastri Nagar",
  },
  {
    name: "SS Chowmein & Manchurian",
    cat: "North Indian",
    rating: "3.6",
    time: "22 MINS",
    avgPrice: "₹100 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wy7bjujpqeo9bxl8da8d",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Chawla Chicken",
    cat: "Mughlai, Punjabi",
    rating: "3.3",
    time: "24 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wexrils7tj2dkiifbfv0",
    address: "Nehru Road, Sanjay Colony",
  },
  {
    name: "Baskin Robbins",
    cat: "Desserts",
    rating: "4.0",
    time: "20 MINS",
    avgPrice: "₹250 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/l8u5sjmpqgrrt1wixdha",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Saffron The Family Restaurant",
    cat: "North Indian",
    rating: "3.5",
    time: "21 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/p31bjtoghmc6amfytqs7",
    address: "BHILWARA, RAJASTHAN, Bhopal Ganj",
  },
  {
    name: "Aloo Bada Centre",
    cat: "Snacks",
    rating: "4.5",
    time: "25 MINS",
    avgPrice: "₹50 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vacqsxxsu84u6w38fg74",
    address: "BHILWARA, Shyam Nagar",
  },
  {
    name: "Bikaner Bhojnalaya",
    cat: "North Indian",
    rating: "4.5",
    time: "32 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/stmjaayn3x065rpdilgc",
    address: "BHILWARA, Pur Road",
  },
  {
    name: "O-zone Cafe",
    cat: "Pizzas, Fast Food, Snacks, Chinese, Beverages",
    rating: "4.5",
    time: "25 MINS",
    avgPrice: "₹100 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vacqsxxsu84u6w38fg74",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Suruchi Restaurant",
    cat: "North Indian",
    rating: "4.5",
    time: "27 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nl2p1o5m6gvwvx0nfgck",
    address: "BHILWARA, Ajmer Choraha",
  },
  {
    name: "Crave Nation",
    cat: "North Indian",
    rating: "4.5",
    time: "22 MINS",
    avgPrice: "₹350 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dqic0ecgabor01aggdwt",
    address: "BHILWARA, Shubash Nager",
  },
  {
    name: "The Brij Kanha restaurant",
    cat: "Indian",
    rating: "4.5",
    time: "27 MINS",
    avgPrice: "₹500 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ju2jsn27fbqbpft50u6q",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "The Roll Junction",
    cat: "Fast Food, Mexican, North Indian",
    rating: "3.3",
    time: "26 MINS",
    avgPrice: "₹250 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bqbosireq9q5g5lv4eu6",
    address: "BHILWARA, Bhagat Singh Colony",
  },
  {
    name: "The Brown Sugar Bakery",
    cat: "Desserts, Bakery",
    rating: "4.4",
    time: "25 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fhupbdldqbjbb3bhq8ik",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Delhi Thali Restaurant",
    cat: "North Indian, Desserts",
    rating: "3.7",
    time: "19 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ss6esa4ktlcnbwy9xdje",
    address: "Old Bhilwara, Old Bhilwara",
  },
  {
    name: "Hotel Apsara",
    cat: "North Indian",
    rating: "3.2",
    time: "24 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ax3hkr2wr21qy7otxqss",
    address: "Old Bhilwara, Shastri Nagar",
  },
  {
    name: "Shree Sanwariya Restaurant",
    cat: "North Indian, Rajasthani",
    rating: "4.2",
    time: "27 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/akbnfuabaonpdvrmagcb",
    address: "Old Bhilwara, Azad Nagar",
  },
  {
    name: "Score board sports cafe",
    cat: "Fast Food, Italian, North Indian, Pizzas",
    rating: "3.1",
    time: "25 MINS",
    avgPrice: "₹250 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kswi0kmh2cicxl7a7fla",
    address: "Bhilwara, Old Bhilwara",
  },
  {
    name: "Mami ka pizza",
    cat: "Indian",
    rating: "3.0",
    time: "25 MINS",
    avgPrice: "₹250 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/utfuoomhsc1zqoaddl8e",
    address: "Old Bhilwara, Azad Nagar",
  },
  {
    name: "Apsara patties and pizza",
    cat: "Pizzas, Fast Food, Beverages",
    rating: "4.5",
    time: "24 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e1pqshqyzumuwmmgn0qo",
    address: "Bhilwara, Gandhi Nagar",
  },
  {
    name: "Harichhaya Garden restaurant",
    cat: "North Indian",
    rating: "4.5",
    time: "27 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aj8uo8zfarfme9jzhaci",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Roll express",
    cat: "North Indian, Chinese, Snacks",
    rating: "4.1",
    time: "27 MINS",
    avgPrice: "₹250 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bj8dju5wf8h0wikjrr11",
    address: "BHILWARA, R K Colony",
  },
  {
    name: "Gourmet Ice Cream Cakes by Baskin Robbins",
    cat: "Desserts, Ice Cream, Bakery",
    rating: "4.5",
    time: "29 MINS",
    avgPrice: "₹250 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/py1nqakqmyioblax02yj",
    address: "Nehru Road, Sanjay Colony",
  },
  {
    name: "Bobbys cafe",
    cat: "Fast Food",
    rating: "4.5",
    time: "26 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qeio1yxsmrgda5en1p10",
    address: "BHILWARA, RAJASTHAN, Bhopal Ganj",
  },
  {
    name: "Eva s Eatery",
    cat: "Fast Food, Beverages",
    rating: "4.5",
    time: "25 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/t20gtkpmkxusbr2ovzpg",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "SN Pizza",
    cat: "North Indian",
    rating: "4.5",
    time: "31 MINS",
    avgPrice: "₹150 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yrykqhbkcci76vuwcysw",
    address: "BHILWARA, Shyam Nagar",
  },
  {
    name: "The Storix cafe",
    cat: "Italian, Continental, Beverages",
    rating: "4.5",
    time: "30 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vgfv2xsmjvxbj4rizngu",
    address: "BHILWARA, Pur Road",
  },
  {
    name: "TEA & TALKS",
    cat: "Beverages, Snacks, Pizzas",
    rating: "4.5",
    time: "26 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rnupdiyo6o09n196kiib",
    address: "BHILWARA, Ajmer Choraha",
  },
  {
    name: "Shree Sanwariya Bhojnalaya",
    cat: "Indian, Rajasthani",
    rating: "4.5",
    time: "34 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cwfw3nw1coisgsu8k17n",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Sip & Gossip Cafe",
    cat: "North Indian",
    rating: "3.9",
    time: "31 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rgwsbhxhaf5ns57z29v1",
    address: "BHILWARA, Shubash Nager",
  },
  {
    name: "Ministry of Pastry Bakehouse",
    cat: "Bakery, Desserts, Snacks, Beverages",
    rating: "4.5",
    time: "25 MINS",
    avgPrice: "₹250 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n0hq2htqutjec6fe2mjj",
    address: "BHILWARA, Bhagat Singh Colony",
  },
  {
    name: "Hotel Tulip continental",
    cat: "Chinese, South Indian, North Indian, Continental, American, Desserts, Fast Food,...",
    rating: "4.5",
    time: "31 MINS",
    avgPrice: "₹500 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/agrvbjh6y7ydi7ugp2ow",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "The Mojo Cake N Bake",
    cat: "Fast Food, Chinese, Beverages",
    rating: "4.5",
    time: "33 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/j6agxyn7x724sq7w6e2j",
    address: "Old Bhilwara, Old Bhilwara",
  },
  {
    name: "Coffee Culture",
    cat: "Pizzas, Pastas, Italian, Indian, American, Chinese, Fast Food, Mexican, Beverage...",
    rating: "4.5",
    time: "27 MINS",
    avgPrice: "₹350 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rmldmdjbrtdn5ugjzi1c",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Blue Umbrella Bakers",
    cat: "Bakery, Desserts",
    rating: "4.5",
    time: "27 MINS",
    avgPrice: "₹400 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qwpuyymmguzi5kfqxymv",
    address: "Old Bhilwara, Shastri Nagar",
  },
  {
    name: "Hari Sewa Bakers",
    cat: "Bakery",
    rating: "4.5",
    time: "33 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dfm62dmaras86pzn8mdr",
    address: "Bhilwara, Old Bhilwara",
  },
  {
    name: "Surprise India",
    cat: "Bakery",
    rating: "4.5",
    time: "32 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ew8npb9jay2qcbjll5ff",
    address: "Old Bhilwara, Azad Nagar",
  },
  {
    name: "Shreenath Pav Bahji",
    cat: "North Indian, Fast Food",
    rating: "4.5",
    time: "24 MINS",
    avgPrice: "₹100 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ikihp6dkkwf1zgijj56f",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Balaji Fast Food",
    cat: "Fast Food",
    rating: "4.5",
    time: "32 MINS",
    avgPrice: "₹150 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fcucdkclujxlwh7q3ntt",
    address: "Bhilwara, Gandhi Nagar",
  },
  {
    name: "Domino's Pizza",
    cat: "Pizzas",
    rating: "3.5",
    time: "30 MINS",
    avgPrice: "₹400 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vomknfcgepzvg2nh6sr4",
    address: "BHILWARA, R K Colony",
  },
  {
    name: "Sukhwal Fast Food",
    cat: "Fast Food",
    rating: "3.6",
    time: "25 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ufk6hwdva4ygf4ywvddl",
    address: "Nehru Road, Sanjay Colony",
  },
  {
    name: "Seven Stone",
    cat: "Continental, Fast Food, North Indian",
    rating: "4.5",
    time: "34 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kuyej4p4605f9pz927m4",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Dev Restaurant",
    cat: "North Indian",
    rating: "3.6",
    time: "30 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dsckhsggcpekxosqih7w",
    address: "BHILWARA, RAJASTHAN, Bhopal Ganj",
  },
  {
    name: "Street Wok",
    cat: "Fast Food",
    rating: "4.5",
    time: "27 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ekowsaxassuzm779t451",
    address: "BHILWARA, Shyam Nagar",
  },
  {
    name: "Love bird pizza",
    cat: "Continental",
    rating: "4.0",
    time: "25 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yrykqhbkcci76vuwcysw",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Shree Ram Pizza Corner",
    cat: "Ice Cream, Desserts",
    rating: "4.5",
    time: "34 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vtasj2fb8jinkwwordnm",
    address: "BHILWARA, Pur Road",
  },
  {
    name: "Chef's secret...",
    cat: "Indian, Chinese, Beverages",
    rating: "4.5",
    time: "27 MINS",
    avgPrice: "₹150 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pdnotve8mehn9mn3jnrd",
    address: "BHILWARA, Ajmer Choraha",
  },
  {
    name: "Chicken Point",
    cat: "Indian, Biryani, Beverages",
    rating: "4.5",
    time: "27 MINS",
    avgPrice: "₹220 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lt40imc7bdvpqbjl1erh",
    address: "BHILWARA, Shubash Nager",
  },
  {
    name: "Rasoda",
    cat: "North Indian, Chinese, Snacks",
    rating: "4.1",
    time: "28 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/d8pqyjprjyp6whgjgzo0",
    address: "BHILWARA, Bhagat Singh Colony",
  },
  {
    name: "H3 Cafe - By Dosa Planet",
    cat: "South Indian, Beverages",
    rating: "3.5",
    time: "29 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f74rcuwveboq3hxtghjc",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Curry by kilo by Ora Foods",
    cat: "North Indian, Snacks, Beverages",
    rating: "4.5",
    time: "28 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qpmnaxmnsblm966jpxwr",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Pink plate",
    cat: "Indian, Continental, Beverages",
    rating: "4.5",
    time: "33 MINS",
    avgPrice: "₹350 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xltqkrjbtljpbqmacv8l",
    address: "Old Bhilwara, Old Bhilwara",
  },
  {
    name: "SM Maggi",
    cat: "North Indian",
    rating: "4.5",
    time: "26 MINS",
    avgPrice: "₹100 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jfckf4ixsauzlqtdjiwk",
    address: "Old Bhilwara, Shastri Nagar",
  },
  {
    name: "Radhey Kachori Center",
    cat: "North Indian, Sweets, Snacks",
    rating: "4.5",
    time: "25 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rjlyrjx6murpb741uzvn",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Hotel Radiance",
    cat: "North Indian, Chinese, Pizzas",
    rating: "4.5",
    time: "32 MINS",
    avgPrice: "₹250 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ubfmqsoz1qmp64baoqkk",
    address: "Bhilwara, Old Bhilwara",
  },
  {
    name: "303 The Royal Recipes",
    cat: "South Indian, Indian, Beverages",
    rating: "4.5",
    time: "29 MINS",
    avgPrice: "₹600 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hqxzzstw2uw0vsb4azwq",
    address: "Old Bhilwara, Azad Nagar",
  },
  {
    name: "Lovish cake n bake",
    cat: "Bakery",
    rating: "4.5",
    time: "32 MINS",
    avgPrice: "₹400 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fub39s2im3lyjp9qur9g",
    address: "Bhilwara, Gandhi Nagar",
  },
  {
    name: "Mateshwari falhari",
    cat: "North Indian",
    rating: "4.5",
    time: "32 MINS",
    avgPrice: "₹100 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pdp4pvytli0i2xcsx7gp",
    address: "BHILWARA, R K Colony",
  },
  {
    name: "Chetna Pizza",
    cat: "Pizzas, Fast Food",
    rating: "4.5",
    time: "35 MINS",
    avgPrice: "₹250 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xhgulwdzwylfecwoon4e",
    address: "Old Bhilwara, Old Bhilwara",
  },
  {
    name: "Fumes & Flames",
    cat: "North Indian",
    rating: "4.5",
    time: "26 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gjaghzrrfivu7nadknhy",
    address: "Nehru Road, Sanjay Colony",
  },
  {
    name: "Salty house",
    cat: "North Indian, Fast Food",
    rating: "4.5",
    time: "28 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yijkdvg0sh84xqcdxnyi",
    address: "BHILWARA, RAJASTHAN, Bhopal Ganj",
  },
  {
    name: "House of masala",
    cat: "Oriental, Continental",
    rating: "4.5",
    time: "32 MINS",
    avgPrice: "₹350 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/w05wavfpx63pbgssdcpl",
    address: "Bhilwara, Bhopal Ganj",
  },
  {
    name: "Masala nonveg restaurant",
    cat: "Indian",
    rating: "4.5",
    time: "30 MINS",
    avgPrice: "₹350 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pjzdckenmvaasiqwvbhm",
    address: "Old Bhilwara, Old Bhilwara",
  },
  {
    name: "B12 Garden Restaurant",
    cat: "North Indian",
    rating: "4.5",
    time: "29 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hsctkh7zgrzkvk5ma1yr",
    address: "BHILWARA, Shyam Nagar",
  },
  {
    name: "Cam`s Kitchen",
    cat: "Indian",
    rating: "4.5",
    time: "30 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/o2sygqkadp67l5urgavr",
    address: "BHILWARA, Pur Road",
  },
  {
    name: "THE CHAWLA'S BAKERY",
    cat: "Bakery, Fast Food, Pizzas, Desserts, Beverages",
    rating: "4.5",
    time: "24 MINS",
    avgPrice: "₹300 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yi5erbrprwg2wu0i48ot",
    address: "BHILWARA, Ajmer Choraha",
  },
  {
    name: "Firangi Club",
    cat: "Continental, North Indian",
    rating: "4.5",
    time: "31 MINS",
    avgPrice: "₹400 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nxxt3aogxodktcf3sol5",
    address: "BHILWARA, Shubash Nager",
  },
  {
    name: "OM SHREE SAI KRIPA",
    cat: "Chinese, Indian, Juices",
    rating: "4.5",
    time: "32 MINS",
    avgPrice: "₹200 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bzzkxlrsgtgtohwxxkbx",
    address: "Old Bhilwara, Old Bhilwara",
  },
  {
    name: "Tikka N Talk",
    cat: "North Indian",
    rating: "4.5",
    time: "39 MINS",
    avgPrice: "₹250 FOR TWO",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b0h47qxxix9btal3jqoo",
    address: "Bhilwara, Bhopal Ganj",
  },
];
