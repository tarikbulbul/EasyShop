import LikedProductCard from '../../Cards/LikedProductCard';

const Wishlist = ({ likedProducts }) => {
    
    return (
        <ul className="p-2 space-y-3">
            {likedProducts.map((p) => (
                <LikedProductCard product={p} />
            ))}
        </ul>
    );
};

export default Wishlist;