// Components/CarSearch.jsx
import React, { useState } from "react";
import CarCard from "../Components/Cards.jsx"; // Adjust path if needed
import { cars } from "../Constants/tempData.js"; // Importing the car data from temp.js

const CarSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null); // New state for selected car

  // Filter brands list dynamically from car data
  const brands = [...new Set(cars.map((car) => car.brand))];

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Toggle brand selection
  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Filter cars based on search and brand selection
  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.model
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(car.brand);
    return matchesSearch && matchesBrand;
  });

  // Handle selecting a car to view details
  const handleViewCar = (car) => {
    setSelectedCar(car); // Set the selected car for detailed view
  };

  // Handle going back to car list
  const handleGoBack = () => {
    setSelectedCar(null); // Reset selected car to show car cards
  };

  return (
    <div className="container mx-auto p-5 space-y-6">
      {/* Search and Filter Section */}
      <div className="md:flex">
        {/* Search (1/3 of the width) */}
        <div className="w-full md:w-1/3 p-4 border-r">
          <h4 className="text-lg font-semibold mb-3">🔎 Search Your Car</h4>
          <input
            type="text"
            placeholder="Search by model..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border rounded-md"
          />
          <h4 className="text-lg font-semibold mt-5 mb-3">
            🚗 Filter by Brand
          </h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>
        </div>

        {/* Car Cards or Car Detail View (2/3 of the width) */}
        <div className="w-full md:w-2/3 p-4">
          {selectedCar ? (
            <div className="p-4 border rounded-md shadow-md">
              {/* Back Button */}
              <button
                className="bg-cyan-500 text-white py-2 px-4 rounded-md mb-4"
                onClick={handleGoBack} // Go back to car list
              >
                Back to Cars
              </button>

              {/* Car Detail View */}
              <h2 className="text-3xl font-semibold">
                {selectedCar.brand} {selectedCar.model}
              </h2>
              <img
                src={selectedCar.imageUrl}
                alt={`${selectedCar.brand} ${selectedCar.model}`}
                className="w-full max-w-md mx-auto mt-4"
              />
              <p className="mt-4 text-gray-700">
                <strong>Price:</strong> ₹{selectedCar.price}
              </p>
              <p>
                <strong>Fuel Type:</strong> {selectedCar.fuelType}
              </p>
              <p>
                <strong>Rating:</strong> {selectedCar.rating} / 5
              </p>
              <p>
                <strong>Seating Capacity:</strong> {selectedCar.seatingCapacity}{" "}
                Seats
              </p>
              <p>
                <strong>Description:</strong> {selectedCar.description}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.length > 0 ? (
                filteredCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    onView={() => handleViewCar(car)} // Pass handleViewCar to each card
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No cars found
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarSearch;
