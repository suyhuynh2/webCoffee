/* eslint-disable react-hooks/exhaustive-deps */
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';

import Header from '../layouts/header';
import Sidebar from '../layouts/sidebar';
import { usePageSwitch, useChangeLoginPage } from '../hooks/usePageSwitch';

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

                {renderFrom({setForm, setActivePage})}

                <Helmet><title>Admin</title></Helmet>

                <Sidebar isOpen={isOpenSidebar}
                        hidden={toggleSidebar} 
                        setActivePage={setActivePage}
                />

                <div className='wrap-work-space'>
                    <Header openSidebar={toggleSidebar} />
                    {renderPage()}
                </div>

            </div>
        </>
    )
}