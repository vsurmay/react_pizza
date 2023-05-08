export type OptionsType = {
  label: string;
  value: string;
  sortBy: string;
  sortValue: string;
};

const options: OptionsType[] = [
  {
    label: "від найпопулярніших",
    value: "-popular",
    sortBy: "desc",
    sortValue: "rating",
  },
  {
    label: "до найпопулярніших",
    value: "+popular",
    sortBy: "asc",
    sortValue: "rating",
  },
  {
    label: "від дешевих до дорогих",
    value: "+price",
    sortBy: "asc",
    sortValue: "price",
  },
  {
    label: "від дорогих до дешевих",
    value: "-price",
    sortBy: "desc",
    sortValue: "price",
  },
];

export default options;
