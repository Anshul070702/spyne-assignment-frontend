import { useState } from "react";
import background from "../assets/background.jpg";
import axios from "axios";
import { createCar } from "../Constants/Api";
import { toast } from "react-toastify";
function CarForm() {
  const [formData, setFormData] = useState({
    company: "",
    carName: "",
    description: "",
    price: "",
    fuelType: "",
    mileage: "",
    warranty: "",
    seater: "",
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
    // Validate required fields before submitting
    const { company, carName, description, price, fuelType } = formData;
    console.log(formData);
    if (!company || !carName || !description || !price || !fuelType) {
      alert("Please fill in all required fields.");
      return;
    }
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

      // Use axios to make the POST request
      const response = await axios.post(createCar, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      toast.success("Car created successfully!");
      console.log(response);
      // You can clear form data or redirect the user here if needed
      setFormData({
        company: "",
        carName: "",
        description: "",
        price: "",
        fuelType: "",
        mileage: "",
        warranty: "",
        seater: "",
        tags: "",
        images: [],
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
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
                Car Name/Title
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
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            {/* <div>
              <label className="block text-lg font-medium text-gray-700">
                Released At
              </label>
              <input
                type="string"
                name="releasedAt"
                value={formData.releasedAt}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div> */}

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Fuel Type
              </label>
              <input
                type="text"
                name="fuelType"
                value={formData.fuelType}
                placeholder="Petrol or Diesel"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            {/* <div>
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
            </div> */}

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
                Description
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                required
              />
            </div>

            {/* <div>
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
            </div> */}

            {/* <div>
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
            </div> */}

            {/* <div>
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
            </div> */}

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
                      type="button"
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
