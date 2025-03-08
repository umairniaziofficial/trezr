import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import NotFound from "./components/NotFound";

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
          element: <NotFound />,
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
