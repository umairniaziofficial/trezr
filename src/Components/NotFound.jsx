import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className="text-center p-6 max-w-lg  bg-white rounded-lg">
        <h1 className="text-7xl font-extrabold text-gray-800 tracking-tight">404</h1>
        <p className="text-xl text-gray-600 font-semibold mt-2">Page Not Found</p>
        <p className="text-gray-500 mt-2">
          The page you are looking for might have been moved or doesn&apos;t exist.
        </p>
        <Link 
          to="/" 
          className="mt-6 px-5 py-2.5 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300 inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
