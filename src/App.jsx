import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Dashboard from "./Sections/Dashboard";
import Transaction from "./Sections/Transaction";
import Loan from "./Sections/Loan";
import Service from "./Sections/Service";
import Setting from "./Sections/Setting";
import CreditCardSection from "./Sections/CreditCard";
import Account from "./Sections/account";
import Investment from "./Sections/investment";
import AppLayout from "./layout/AppLayout";
import SidebarProvider from "./Context/sidebarContext";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "transactions",
          element: <Transaction />,
        },
        {
          path: "accounts",
          element: <Account />,
        },
        {
          path: "investments",
          element: <Investment />,
        },
        {
          path: "credit-cards",
          element: <CreditCardSection />,
        },
        {
          path: "loans",
          element: <Loan />,
        },
        {
          path: "services",
          element: <Service />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
        {
          path: "*",
          element: (
            <div className="h-screen flex flex-col justify-center items-center ">
              <div className="text-center p-6 max-w-lg  bg-white rounded-lg">
                <h1 className="text-7xl font-extrabold text-gray-800 tracking-tight">
                  404
                </h1>
                <p className="text-xl text-gray-600 font-semibold mt-2">
                  Page Not Found
                </p>
                <p className="text-gray-500 mt-2">
                  The page you are looking for might have been moved or
                  doesn&apos;t exist.
                </p>
                <Link
                  to="/"
                  className="mt-6 px-5 py-2.5 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300 inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          ),
        },
      ],
    },
  ]);

  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  );
};

export default App;
