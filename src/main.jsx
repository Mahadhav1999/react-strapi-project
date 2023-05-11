import ReactDOM from 'react-dom/client';
import './index.css';

// Prime react import
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; //flex

//react-toastify import
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


//routes import
import Layout from './routes/Layout';
import EmployeeList from './pages/EmployeeList';
import Home from './routes/Home';
import Employees,{ Loader as EmployeesLoader  } from './routes/Employees';
import axios from 'axios';
import CreateEmployee from './routes/Create-Employee';

//base default url for backend
axios.defaults.baseURL = "http://localhost:1337";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "list/employee",
        element: <EmployeeList />,
      },
      {
        path: "employee",
        element: <Employees />,
        loader: EmployeesLoader,
      },
      {
        path: "employee/create",
        element: <CreateEmployee />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
