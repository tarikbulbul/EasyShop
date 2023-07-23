import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Benifits from  '../../components/Benifits';
import Products from '../../components/Products';

const home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Benifits />
            <Products />
        </main>
    );
};

export default home;