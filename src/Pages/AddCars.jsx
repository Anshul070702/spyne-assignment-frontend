import { useState } from "react";
import background from "../assets/background.jpg";

function CarForm() {
  const [formData, setFormData] = useState({
    company: "",
    carName: "",
    description: "",
    price: "",
    releasedAt: "",
    fuelType: "",
    mileage: "",
    safetyRating: "",
    warranty: "",
    seater: "",
    size: "",
    fuelTank: "",
    engineSize: "",
    transmission: "",
    tags: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.images.length > 10) {
      alert("You can upload a maximum of 10 images.");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleDeleteImage = (index) => {
    setFormData((prev) => {
      const updatedImages = prev.images.filter((_, i) => i !== index);
      return { ...prev, images: updatedImages };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      for (const key in formData) {
        if (key !== "images") {
          form.append(key, formData[key]);
        } else {
          formData.images.forEach((image) => {
            form.append("images", image);
          });
        }
      }
      const response = await fetch("https://dummyapi.com/cars", {
        method: "POST",
        body: form,
      });
      if (response.ok) {
        alert("Car created successfully!");
      } else {
        alert("Failed to create car");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-45 p-6 rounded-xl shadow-2xl w-full max-w-3xl m-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Add New Car
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Car Name
              </label>
              <input
                type="text"
                name="carName"
                value={formData.carName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Released At
              </label>
              <input
                type="datetime-local"
                name="releasedAt"
                value={formData.releasedAt}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Fuel Type
              </label>
              <input
                type="text"
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Mileage
              </label>
              <input
                type="text"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Safety Rating
              </label>
              <input
                type="number"
                name="safetyRating"
                value={formData.safetyRating}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Tags
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Warranty
              </label>
              <input
                type="text"
                name="warranty"
                value={formData.warranty}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Seater
              </label>
              <input
                type="number"
                name="seater"
                value={formData.seater}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Size
              </label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Fuel Tank
              </label>
              <input
                type="text"
                name="fuelTank"
                value={formData.fuelTank}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Engine Size
              </label>
              <input
                type="text"
                name="engineSize"
                value={formData.engineSize}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Transmission
              </label>
              <input
                type="text"
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Upload Images (Max 10)
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
              />
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-h-24 overflow-y-auto">
                {formData.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Car${index + 1}`}
                      className="object-cover w-full h-24 rounded-lg transform transition-all duration-300 hover:scale-105"
                    />
                    <button
                      onClick={() => handleDeleteImage(index)}
                      className="h-6 w-6 absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full hover:bg-red-600"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="col-span-2 mt-6 w-full p-4 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CarForm;
