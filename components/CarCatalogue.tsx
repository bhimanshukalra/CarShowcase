import React from "react";
import SearchBar from "./SearchBar";
import CustomFilter from "./CustomFilter";
import { fuels, yearsOfProduction } from "@/constants";
import CarCard from "./CarCard";
import ShowMore from "./ShowMore";
import { CarFilterProps } from "@/network/fetch-cars";
import { CarProps } from "@/types";

interface CarCatalogueProps {
  allCars: CarProps[];
  searchParams: CarFilterProps;
}

const CarCatalogue = ({ allCars, searchParams }: CarCatalogueProps) => {
  const isDataEmpty =
    !Array.isArray(allCars) || allCars.length === 0 || !allCars;

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars.map((car) => (
              <CarCard car={car} key={JSON.stringify(car)} />
            ))}
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>Oops, no car found</p>
        </div>
      )}
    </div>
  );
};

export default CarCatalogue;
