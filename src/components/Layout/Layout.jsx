import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import { Main } from "./Layout.styled";
import Loader from "../Loader/Loader";
import ScrollBtn from "../ScrollBtn/ScrollBtn";

function Layout() {
  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollBtn/>
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
