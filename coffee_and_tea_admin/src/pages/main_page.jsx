import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import Header from '../layouts/header';
import Sidebar from '../layouts/sidebar';
import { usePageSwitch, 
            useChangeLoginPage 
        } from '../hooks/usePageSwitch';

export default function MainLayout() {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const toggleSidebar = () => {
        setIsOpenSidebar(prevState => !prevState)
    }
    const { setActivePage, renderPage } = usePageSwitch();
    const { setForm, renderFrom } = useChangeLoginPage();

    return(
        <>
        <div className='wrap-home-page'>

            {/* form */}
            {renderFrom({setForm})}

            {/* title */}
            <Helmet><title>Admin</title></Helmet>

            {/* sidebar */}
            <Sidebar isOpen={isOpenSidebar} hidden={toggleSidebar} setActivePage={setActivePage} />

            {/* WORK SPACE */}
            <div className='wrap-work-space'>

                {/* header */}
                <Header openSidebar={toggleSidebar} />

                {/* render page */}
                {renderPage()}
            </div>

        </div>
        </>
    )
}