import CartContent from '../../components/Cart';
import Checkout from '../../components/Cart/Checkout';

const cart = () => {
    return (
        <div className="max-w-[1024px] mx-auto min-h-screen flex items-center">
            <CartContent />
            <Checkout />
        </div>
    );
};

export default cart;