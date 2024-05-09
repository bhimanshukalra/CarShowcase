import { CarProps } from "@/types";

export interface CarFilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
export const fetchCars = async (filters: CarFilterProps) => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars${getFormattedCarFilter(
    filters
  )}`;
  const options = {
    headers: {
      "X-RapidAPI-Key": "ADD_YOUR_API_KEY_HERE",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result as CarProps[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getFormattedCarFilter = (filters: CarFilterProps) => {
  let { manufacturer, fuel, limit, model, year } = filters;
  manufacturer = manufacturer || "";
  fuel = fuel || "";
  limit = limit || 10;
  model = model || "";
  year = year || 2024;

  return `?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
};
