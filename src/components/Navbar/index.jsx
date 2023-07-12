import { FiHeart, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="py-4 border-b sticky z-50 top-0 left-0 right-0 bg-white/40 backdrop-blur-sm">
            <div className="flex items-center justify-between max-w-[1024px] mx-auto">
				<p className="font-bold text-2xl">Easyshop</p>
				<div className="flex items-center justify-between space-x-4">
					<button className="relative p-2">
						<FiHeart className="!h-7 !w-7" />
						<div className="cart-num">
							<span className="text-xs">1</span>
						</div>
					</button>
					<button className="relative p-2">
						<FiShoppingCart className="!h-7 !w-7" />
						<div className="cart-num">
							<span className="text-xs">1</span>
						</div>
					</button>
					<button className="btn btn-secondary">
						Login
					</button>
				</div>
            </div>
        </div>
    );
};

export default Navbar;