import {
  HeroSection,
  DownloadSection,
  TopSection,
  DishUI,
  RestaurantUI,
  PurchaseSection,
  DiscountSection,
} from "@/components";

import { RESTAURANT_DATA } from "@/data/restaurantData";
import { DISHES_DATA } from "@/data/dishesData";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <DownloadSection />
      <TopSection
        title="restaurant"
        data={RESTAURANT_DATA}
        render={(restaurant, index) => (
          <RestaurantUI key={index} {...restaurant} />
        )}
      />
      <TopSection
        title="dish"
        data={DISHES_DATA}
        render={(dish, index) => <DishUI key={index} {...dish} />}
      />
      <PurchaseSection />
      <DiscountSection />
    </main>
  );
}
