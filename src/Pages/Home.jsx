// Home.js
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to the Car Management System
      </h1>
      <p className="text-lg max-w-lg text-center">
        Use the navigation bar above to manage cars, view available options, or
        access your account. Select an option to get started!
      </p>
    </div>
  );
};

export default Home;
