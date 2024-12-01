import Banner from "../Components/Banner";
import Heading from "../Components/Heading";


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* Heading */}
            <Heading 
              title={'Browse Coffees by Category'}
              subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}
            ></Heading>

            {/* category tab  section*/}

            {/* Dynamic Nested Components */}
        </div>
    );
};

export default Home;