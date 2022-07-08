import MainPage from "../../Pages/MainPage/MainPage";
import ItemPage from "../../Pages/ItemPage/ItemPage";
import Layout from "../Layout/Layout";

export enum ROUTE {
    CATALOG = 'books',
    HOME='/'
}

type routingType= {
    path: string,
    element: React.ReactElement ,
    children?: Array < { path: string,
        element: React.ReactElement }>
}
export const routingData: Array<routingType>=[
    {
        path: '/',
        element: <Layout />,
        children: [{
            path: ROUTE.HOME,
            element: <MainPage /> ,
        },
            {
                path: ROUTE.CATALOG+`/:itemID`,
                element: <ItemPage />,
            },
            ]
    }]