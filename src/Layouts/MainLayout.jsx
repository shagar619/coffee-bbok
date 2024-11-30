import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}

            <Navbar></Navbar>

           

            <div className="min-h-[calc(100vh-290px)]">
                 {/* Dynamic Section */}
            </div>

            {/* Footer */}

            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;