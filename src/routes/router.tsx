import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  Outlet,
} from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Abibas } from "../components/pages/Abibas";
import { Prices } from "../components/pages/Prices";
import { Model } from "../components/pages/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../components/pages/Login";

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    PROTECTED: '/protected',
    ERROR: '/error',
    LOGIN: '/login',
} as const

const publicRoutes: RouteObject[] = [
    {
        path: PATH.ERROR,
        element: <Error404 />
    },
    {
        path: '/',
        element: <Navigate to={PATH.ADIDAS} replace={true}/>
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas />
    },
    { 
        path: PATH.PUMA,
        element: <Puma />
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas />
    },
    {
        path: PATH.PRICES,
        element: <Prices />
    },
    {
        path: PATH.MODEL,
        element: <Model />
    },
    {
        path: PATH.LOGIN,
        element: <Login />
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED,
        element: <ProtectedPage/>
    },
]

const PrivateRoutes = () => {
    const isAuth = true
    return isAuth ? <Outlet /> : <Navigate to={'/login'}/>
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR} />,
    children: [
        {
            element: <PrivateRoutes />,
            children: privateRoutes,
        },
        ...publicRoutes,
    ]
  },
]);