import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import BlogAndNews from './routes/BlogAndNews';
import Help from './routes/Help';
import PageNotFound from './routes/PageNotFound';
import Login from './routes/Login';
import Signup from './routes/Signup';
import CurrentAccounts from './routes/CurrentAccounts';
import BusinessBanking from './routes/BusinessBanking';
import OverdraftsAndLoans from './routes/OverdraftsAndLoans';
import MoneyTransfers from './routes/MoneyTransfers';
import Layout from './components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <PageNotFound />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog-and-news",
        element: <BlogAndNews />,
      },
      {
        path: "/help",
        element: <Help />,
      },{
        path: "/current-accounts",
        element: <CurrentAccounts />
      },
      {
        path: "/business-banking",
        element: <BusinessBanking />
      },
      {
        path: "/overdrafts-and-loans",
        element: <OverdraftsAndLoans />
      },
      {
        path: "/money-transfers",
        element: <MoneyTransfers />
      }
      // Add other routes that should have the modal available
    ]
  },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <Signup />
    }
  ])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;