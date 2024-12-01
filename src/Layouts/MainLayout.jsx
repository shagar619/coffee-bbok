import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}

            <Navbar></Navbar>

           

            <div className="min-h-[calc(100vh-290px)] py-12 px-12 container mx-auto">
                 {/* Dynamic Section */}
                 <Outlet></Outlet>
            </div>

            {/* Footer */}

            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;