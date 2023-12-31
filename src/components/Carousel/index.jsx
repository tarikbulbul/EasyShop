import Slider from 'react-slick';
import ProductCard from '../Cards/ProductCard';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};

const Carousel = ({ products }) => {
    return (
        <Slider {...settings} autoplay>
            {products.map((d) => (
                <ProductCard product={d} key={d.id} />
            ))}
        </Slider> 
    );
};

export default Carousel;