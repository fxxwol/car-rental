import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Footer from './Footer/Footer';

function Layout() {

    return (
        <>
            <AppBar />
            <main>
                <Suspense >
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}

export default Layout;