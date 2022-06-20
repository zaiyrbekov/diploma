import beansImage from "../assets/header15.jpg";
import accessoriesImage from "../assets/category3.jpg";
import teaImage from "../assets/category2.jpg";

const categories = [
  {
    categoryId: "Burgers",
    title: "Burgers",
    image: beansImage,
    desciption:
      "A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.",
  },
  {
    categoryId: "Drinks",
    title: "Drinks",
    image: teaImage,
    desciption:
      "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China, India and other East Asian countries.",
  },
  {
    categoryId: "Additives",
    title: "Additionally",
    image: accessoriesImage,
    desciption:
      "The best coffee accessories for hot and iced coffee drinks include burr grinders, water kettles, frothers, scales, and thermometers.",
  },
];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex((category) => category.categoryId === categoryId)
  ];
}
