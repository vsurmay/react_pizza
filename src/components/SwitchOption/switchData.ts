export type ValueOptionsType = {
  label: string;
  value: number;
};

export const pizzaTypes: ValueOptionsType[] = [
  { label: "тонке", value: 0 },
  { label: "традиційне", value: 1 },
];

export const pizzaSizes: ValueOptionsType[] = [
  { label: "26", value: 26 },
  { label: "30", value: 30 },
  { label: "40", value: 40 },
];
