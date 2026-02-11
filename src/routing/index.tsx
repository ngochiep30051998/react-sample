import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootBoundary } from "../components/RootBoundary";
import MasterLayout from "../layouts/master-layout";
import * as Dashboard from '../modules/dashboard';
import * as Users from '../modules/users';
import * as Products from '../modules/products';
import * as Orders from '../modules/orders';
import * as Auth from '../modules/auth';
import { Loading } from '../components/loading/Loading';
// Guards
import { PublicGuard } from '../guards/PublicGuard';
import { PrivateGuard } from '../guards/PrivateGuard';
import { IMenuItem } from '../interfaces/common.interface';
import { AuthLayout } from '@app/layouts/auth-layout';


const modules = [Dashboard, Users, Products, Orders];

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <RootBoundary />,
        children: [
            {
                path: '/',
                element: <PrivateGuard children={<MasterLayout />} />,
                children: []
            },
            {
                element: <PublicGuard children={<AuthLayout />} />,
                children: [
                    Auth.Router
                ]
            },
            {
                element: <PrivateGuard children={<MasterLayout />} />,
                children: [
                    ...modules.map(x => x.Router),
                ]
            },
        ]
    }
], {
    basename: import.meta.env.PUBLIC_URL
})

const Router = () => (
    <RouterProvider
        router={router}
        fallbackElement={<Loading />}
    />
)
export const MenuItems: IMenuItem[] = [
    ...modules.map(x => x.MenuItems).reduce((prev, curr) => prev.concat(curr), [])
];

export default Router;

