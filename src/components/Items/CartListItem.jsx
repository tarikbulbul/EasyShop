import { Button, IconButton, Td, Tr } from '@chakra-ui/react';
import { formatToCurrency } from '../../utils/helpers';
import { MdAdd } from 'react-icons/md';
import { RiSubtractLine } from 'react-icons/ri';
import { removeFromCart, increaseQuantity, decreaseQuantity, } from '../../features/products/productsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const CartListItem = ({ p }) => {
    const dispatch = useDispatch();

    const incrementQuantity = () => {
        dispatch(increaseQuantity(p.id));
    }

    const decrementQuantity = () => {
        if (p.quantity === 1) {
          dispatch(removeFromCart(p.id));
          return;
        }
        dispatch(decreaseQuantity(p.id));
      };

    return (
        <Tr>
            <Td>
                <Link to={`/products/${p.id}`}>
                    <div className="h-[70px] min-w-[70px]">
                        <img 
                            src={p.image}
                            alt={p.title}
                            className="max-h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="font-medium text-sm font-Poppins">{p.title}</h2>
                    </div>
                </Link>
            </Td>
            <Td>
                <span className="font-medium">
                    {formatToCurrency.format(p.price * p.quantity)}
                </span>
            </Td>
            <Td>
                <div className="flex items-center space-x-1">
                    <IconButton onClick={incrementQuantity}>
                        <MdAdd />
                    </IconButton>
                    <span>{p.quantity}</span>
                    <IconButton onClick={decrementQuantity}>
                        <RiSubtractLine />
                    </IconButton>
                </div>
            </Td>
            <Td>
                <Button
                    colorScheme="red"
                    onClick={() => dispatch(removeFromCart(p.id))}
                >
                    Remove
                </Button>
            </Td>
        </Tr>
    );
};

export default CartListItem;