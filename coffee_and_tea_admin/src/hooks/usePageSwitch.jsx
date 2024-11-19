import { useState } from "react";
import Dashboard from "../layouts/dashboard/dashboard";
import Orders from "../layouts/orders/orders";
import Products from "../layouts/products/products";
import Settings from "../layouts/settings/settings";
import Custumers from "../layouts/customers/custumers";
import AdminInfo from "../layouts/settings/admin_info";
import ChangePassword from "../layouts/settings/change_password";
import Login from "../layouts/login";
import Register from "../layouts/register";
import ForgotPassword from "../layouts/forgot_password";

export function usePageSwitch() {
    const [activePage, setActivePage] = useState('dashboard');

    const renderPage = () => {
        switch (activePage) {
            case 'dashboard':
                return <Dashboard/>;

            case 'orders':
                return <Orders/>;

            case 'products':
                return <Products/>;

            case 'settings':
                return <Settings/>;

            case 'customers':
                return <Custumers/>;

            default:
                return <Dashboard/>
        }
    }

    return { setActivePage, renderPage };
}

export function useSettingSwitch() {
    const [activeSpace, setActiveSpace] = useState('admin_info');

    const renderSpace = (props) => {
        switch (activeSpace) {
            case 'change_password':
                return <ChangePassword {...props} setActivePage={setActiveSpace}/>;

            case 'admin_info':
                return <AdminInfo {...props}/>;

            default:
                return <AdminInfo {...props} />;
        }
    }

    return { setActiveSpace, renderSpace };
}

export function useChangeLoginPage() {
    const [activeForm, setForm] = useState('login');

    const renderFrom = (props) => {
        switch (activeForm) {
            case 'login':
                return <Login {...props} />;

            case 'register':
                return <Register {...props} />;

            case 'forgot_password':
                return <ForgotPassword {...props} />;

            case 'hidden':
                return <></>;

            default:
                return <Login {...props} />;
        }
    }

    return { setForm, renderFrom };
}