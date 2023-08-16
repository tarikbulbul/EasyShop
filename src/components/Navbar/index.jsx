import CartBtn from '../Cart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, login, logout } from '../../features/user/userSlice';
import WishlistModal from '../Modal/WishlistModal';

const Navbar = () => {
	const { isLoggedIn } = useSelector(userSelector);
	const dispatch = useDispatch();

	const handleAuth = () => {
		dispatch(isLoggedIn ? logout() : login());
	}

    return (
        <div className="py-4 border-b sticky z-50 top-0 left-0 right-0 bg-white/40 backdrop-blur-sm">
            <div className="flex items-center justify-between max-w-[1024px] mx-auto">
			<Link to="/" className="font-bold text-2xl">
				Easyshop
			</Link>
				<div className="flex items-center justify-between space-x-4">
					<WishlistModal />
					<CartBtn />
					<button onClick={handleAuth} className="btn btn-secondary">
						{isLoggedIn ? "Logout" : "Login"}
					</button>
				</div>
            </div>
        </div>
    );
};

export default Navbar;