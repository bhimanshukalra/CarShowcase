import { CarCatalogue, Hero } from "@/components";
import { fetchCars } from "@/network";
import { CarFilterProps } from "@/network/fetch-cars";

interface HomeProps {
  searchParams: CarFilterProps;
}

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars(searchParams);

  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue allCars={allCars} searchParams={searchParams} />
    </main>
  );
}
