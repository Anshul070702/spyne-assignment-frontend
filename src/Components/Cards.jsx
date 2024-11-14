// Components/CarCard.jsx
import React from "react";

const CarCard = ({ car, onView }) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      {/* Car Image */}
      <a href={car.carLink}>
        <img
          src={car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          className="border rounded"
          style={{ maxWidth: "100%", maxHeight: "130px", objectFit: "contain" }}
        />
      </a>

      {/* Car Details */}
      <h3 className="text-xl font-semibold mt-3">
        {car.brand} {car.model}
      </h3>

      {/* Price and Fuel Type in the same row */}
      <div className="flex items-center text-gray-700 mt-2">
        <span>&#8377;</span> {car.price}
        <span className="mx-4">|</span>
        <svg
          className="inline-block mr-1 text-gray-600"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
        >
          <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z"></path>
        </svg>
        {car.fuelType}
      </div>

      {/* Rating and Seating Capacity in the same row */}
      <div className="flex items-center text-gray-600 mt-2">
        <svg
          className="inline-block mr-1 text-gray-600"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
        >
          <path d="M8 1.748a.75.75 0 0 1 .412.35l1.5 2.575 2.625.225a.75.75 0 0 1 .412 1.35l-2.1 1.85.6 2.75a.75.75 0 0 1-1.08.798l-2.4-1.125-2.4 1.125a.75.75 0 0 1-1.08-.798l.6-2.75-2.1-1.85a.75.75 0 0 1 .412-1.35l2.625-.225 1.5-2.575z"></path>
        </svg>
        {car.rating} / 5<span className="mx-4">|</span>
        <span>{car.seatingCapacity} Seats</span>
      </div>

      {/* View Button */}
      <div className="flex justify-end mt-3">
        <button
          className="bg-cyan-500 text-white py-2 px-4 rounded-md"
          onClick={() => onView(car)} // Call onView when clicked
        >
          View
        </button>
      </div>
    </div>
  );
};

export default CarCard;
