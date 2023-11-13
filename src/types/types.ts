export type RestaurantProps = {
  id: number;
  title: string;
  image: string;
  rating: number;
  time: number;
  tag: string;
};

export type DishProps = {
  id: number;
  title: string;
  image: string;
  tag: string;
  price?: number | undefined;
  time: number;
  rating: number;
};

export type TopSectionProps = {
  title: "restaurant" | "dish";
  data: RestaurantProps[] | DishProps[];
  render: (item: RestaurantProps | DishProps, index: number) => JSX.Element;
};

function TopSection({ title, data, render }: TopSectionProps) {
  /* ... */
}
