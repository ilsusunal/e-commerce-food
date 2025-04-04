import type { MainPageData } from "~/types/mainPage";

export const mockMainPageData: MainPageData = {
  popularCategories: [
    {
      id: 1,
      categoryName: "Main Dish",
      itemAmount: "(86 items)",
      categoryImage: "/images/mainPage/popularCategories/popCat_main_dish.svg",
    },
    {
      id: 2,
      categoryName: "Breakfast",
      itemAmount: "(12 items)",
      categoryImage: "/images/mainPage/popularCategories/popCat_breakfast.svg",
    },
    {
      id: 3,
      categoryName: "Dessert",
      itemAmount: "(48 items)",
      categoryImage: "/images/mainPage/popularCategories/popCat_dessert.svg",
    },
    {
      id: 4,
      categoryName: "Beverage",
      itemAmount: "(25 items)",
      categoryImage: "/images/mainPage/popularCategories/popCat_beverage.svg",
    },
    {
      id: 5,
      categoryName: "Browse All",
      itemAmount: "(255 items)",
      categoryImage: "/images/mainPage/popularCategories/popCat_browse_all.svg",
    },
  ],
  dailyBestSells: {
    Featured: [
      {
        productName: "All Natural Italian-Style Chicken Meatballs",
        price: 245.8,
        discountedPrice: 238.85,
        discountAmunt: 35,
        productBrand: "Hodo Foods",
        score: 4.8,
        label: "Save 35%",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_1.svg",
        id: 1
      },
      {
        productName: "Angie’s Boomchickapop Sweet and womnies",
        price: 245.8,
        discountedPrice: 240,
        discountAmunt: 0,
        productBrand: "Hodo Foods",
        score: 4.9,
        label: "Sale",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_2.svg",
        id: 2
      },
      {
        productName: "Foster Farms Takeout Crispy Classic",
        price: 250,
        discountedPrice: 238.5,
        discountAmunt: 0,
        productBrand: "Hodo Foods",
        score: 4.5,
        label: "Best Sale",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_3.svg",
        id: 3
      },
      {
        productName: "Blue Diamond Almonds Lightly Salted",
        price: 245.8,
        discountedPrice: 238.85,
        discountAmunt: 0,
        productBrand: "Hodo Foods",
        score: 4.8,
        label: "Save 15%",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_4.svg",
        id: 4
      },
      {
        productName: "Chobani Complete Vanilla Greek Yogurt",
        price: 55.8,
        discountedPrice: 54.85,
        discountAmunt: 0,
        productBrand: "NestFood",
        score: 4.6,
        label: "Best Seller",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_1.svg",
        id: 5
      },
    ],
    Popular: [
      {
        productName: "Chobani Complete Vanilla Greek Yogurt",
        price: 55.8,
        discountedPrice: 54.85,
        discountAmunt: 0,
        productBrand: "NestFood",
        score: 4.6,
        label: "Best Seller",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_1.svg",
        id: 6
      },
      {
        productName: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
        price: 32.85,
        discountedPrice: 33.8,
        discountAmunt: 0,
        productBrand: "NestFood",
        score: 4.4,
        label: "Best Seller",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_1.svg",
        id: 7
      },
      {
        productName: "Gorton’s Beer Battered Fish Fillets with soft paper",
        price: 25.8,
        discountedPrice: 22,
        discountAmunt: 0,
        productBrand: "Old El Paso",
        score: 4.2,
        label: "Best Seller",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_1.svg",
        id: 8
      },
      {
        productName: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
        price: 24.8,
        discountedPrice: 22.85,
        discountAmunt: 22.85,
        productBrand: "Tyson",
        score: 4.3,
        label: "Best Seller",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_1.svg",
        id: 9
      },
    ],
    New: [
      {
        productName: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        price: 33.8,
        discountedPrice: 32.85,
        discountAmunt: 0,
        productBrand: "NestFood",
        score: 4.0,
        label: "New",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_1.svg",
        id: 10
      },
      {
        productName: "Perdue Simply Smart Organics Gluten Free",
        price: 26.8,
        discountedPrice: 24.85,
        discountAmunt: 0,
        productBrand: "Old El Paso",
        score: 4.2,
        label: "New",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_1.svg",
        id: 11
      },
      {
        productName: "Signature Wood-Fired Mushroom and Caramelized",
        price: 13.8,
        discountedPrice: 12.85,
        discountAmunt: 0,
        productBrand: "Progresso",
        score: 3.5,
        label: "New",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_1.svg",
        id: 12
      },
      {
        productName: "Simply Lemonade with Raspberry Juice",
        price: 16.8,
        discountedPrice: 15.85,
        discountAmunt: 0,
        productBrand: "Yoplait",
        score: 4.0,
        label: "New",
        productImages: "/images/mainPage/dailyBestSells/featured_hodo_1.svg",
        id: 13
      },
    ],
  },
  campaingCards: [
    {
      image: "/images/mainPage/dailyBestSells/campaignCard_1.svg",
      campaignName: "Bring nature into your home",
      link: "/",
      id: 1
    },
  ],
  featuredRecipes: [
    {
      recipeName: "Fattoush salad",
      recipeText: "Description of the item",
      recipeImage: "/images/mainPage/featuredRecipes/rec_fattoush_salad.svg",
      id: 1
    },
    {
      recipeName: "Vegetable salad",
      recipeText: "Description of the item",
      recipeImage: "/images/mainPage/featuredRecipes/rec_veg_salad.svg",
      id: 2
    },
    {
      recipeName: "Egg vegi salad",
      recipeText: "Description of the item",
      recipeImage: "/images/mainPage/featuredRecipes/rec_egg_vegi_salad.svg",
      id: 3
    },
  ],
  dealsOfTheDay: [
    {
      productName: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      price: 33.8,
      discountedPrice: 32.85,
      discountAmunt: 0,
      productBrand: "NestFood",
      score: 4.0,
      label: "",
      productImages: "/images/mainPage/dealsOfTheDay/deal_of_day_1.svg",
      id: 0
    },
    {
      productName: "Perdue Simply Smart Organics Gluten Free",
      price: 26.8,
      discountedPrice: 24.85,
      discountAmunt: 0,
      productBrand: "Old El Paso",
      score: 4.2,
      label: "",
      productImages: "/images/mainPage/dealsOfTheDay/deal_of_day_2.svg",
      id: 0
    },
    {
      productName: "Signature Wood-Fired Mushroom and Caramelized",
      price: 13.8,
      discountedPrice: 12.85,
      discountAmunt: 0,
      productBrand: "Progresso",
      score: 3.5,
      label: "",
      productImages: "/images/mainPage/dealsOfTheDay/deal_of_day_3.svg",
      id: 0
    },
    {
      productName: "Simply Lemonade with Raspberry Juice",
      price: 16.8,
      discountedPrice: 15.85,
      discountAmunt: 0,
      productBrand: "Yoplait",
      score: 4.0,
      label: "",
      productImages: "/images/mainPage/dealsOfTheDay/deal_of_day_4.svg",
      id: 0
    },
  ],
  testimonial: {
    title: "Why People Choose us?",
    image: "/images/mainPage/testimonial.png",
    testimonials: [
      {
        title: "Convenient and Reliable",
        text: "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.",
        icon: "/images/mainPage/testimonials/testimonial_1.svg",
        id: 1
      },
      {
        title: "Variety of Options",
        text: "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.",
        icon: "/images/mainPage/testimonials/testimonial_2.svg",
        id: 2
      },
      {
        title: "Eat Burger",
        text: "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.",
        icon: "/images/mainPage/testimonials/testimonial_3.svg",
        id: 3
      },
    ],
  },
  services: [
    {
      title: "Best prices & offers",
      text: "Orders $50 or more",
      icon: "/images/mainPage/services/service_1.svg",
      id: 4
    },
    {
      title: "Free delivery",
      text: "24/7 amazing services",
      icon: "/images/mainPage/services/service_2.svg",
      id: 5
    },
    {
      title: "Great daily deal",
      text: "When you sign up",
      icon: "/images/mainPage/services/service_3.svg",
      id: 6
    },
    {
      title: "Wide assortment",
      text: "Mega Discounts",
      icon: "/images/mainPage/services/service_4.svg",
      id: 7
    },
    {
      title: "Easy returns",
      text: "Within 30 days",
      icon: "/images/mainPage/services/service_5.svg",
      id: 8
    },
  ],
  footer: {
    about: {
      logo: "/images/mainPage/foodzy_logo.svg",
      description:
        "FoodTrove is the biggest market of grocery products. Get your daily needs from our store.",
      communication: [
        {
          icon: "material-symbols:location-on-outline-rounded",
          text: "51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.",
        },
        {
          icon: "material-symbols:mail-outline-rounded",
          text: "example@email.com",
        },
        {
          icon: "material-symbols:call",
          text: "+91 123 4567890",
        },
      ],
    },
    columns: {
      Company: [
        { text: "About Us", link: "/" },
        { text: "Delivery Information", link: "/" },
        { text: "Privacy Policy", link: "/" },
        { text: "Terms & Conditions", link: "/" },
        { text: "Contact Us", link: "/" },
        { text: "Support Center", link: "/" },
      ],
      Category: [
        { text: "Dairy & Bakery", link: "/" },
        { text: "Fruits & Vegetable", link: "/" },
        { text: "Snack & Spice", link: "/" },
        { text: "Juice & Drinks", link: "/" },
        { text: "Chicken & Meat", link: "/" },
        { text: "Fast Food", link: "/" },
      ],
    },
    socials: {
      socialMedia: [
        { link: "/", icon: "ri:facebook-line" },
        { link: "/", icon: "hugeicons:new-twitter" },
        { link: "/", icon: "icon-park-outline:dribble" },
        { link: "/", icon: "mdi:instagram" },
      ],
      images: [
        "/images/mainPage/footer/footer_1.png",
        "/images/mainPage/footer/footer_2.png",
        "/images/mainPage/footer/footer_3.png",
        "/images/mainPage/footer/footer_4.png",
        "/images/mainPage/footer/footer_5.png",
      ],
    },
  },
};
