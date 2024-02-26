import { Outlet } from "react-router-dom"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-svh mx-auto max-w-6xl p-5">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;
