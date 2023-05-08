export type CategoriesType = {
  label: string;
  key: string;
};

const categories: CategoriesType[] = [
  { label: "Всі", key: "all" },
  { label: "М'ясні", key: "meat" },
  { label: "Вегетеріанські", key: "vegeterian" },
  { label: "Гриль", key: "grill" },
  { label: "Гострі", key: "sharp" },
  { label: "Закриті", key: "closed" },
];

export default categories;
