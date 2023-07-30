import { Button, ButtonGroup, Center, filter, } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../../features/products/productsSlice";
import ProductList from "../../List/ProductList";

const ShopByCategories = () => {
  const [filterType, setFilterType] = useState("men's clothing");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { products } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const filteredData = products.filter((p) => p.category === filterType);
    setFilteredProducts(filteredData);
  }, [filterType, products]);

  return (
    <div>
      <h1 className="text-3xl font-Poppins font-bold mb-5 text-center">
        Shop by Categories
      </h1>
      <Center>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            className="!font-Poppins"
            name="men's clothing"
            leftIcon={<FaMale />}
            isDisabled={filterType === "men's clothing"}
          >
            Men's Clothing
          </Button>
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            className="!font-Poppins"
            name="women's clothing"
            leftIcon={<FaFemale />}
            isDisabled={filterType === "women's clothing"}
          >
            Women's Clothing
          </Button>
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            className="!font-Poppins"
            name="electronics"
            leftIcon={<ImHeadphones />}
            isDisabled={filterType === "electronics"}
          >
            Electronics
          </Button>
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            className="!font-Poppins"
            name="jewelery"
            leftIcon={<GiBigDiamondRing />}
            isDisabled={filterType === "jewelery"}
          >
            Jewelleries
          </Button>
        </ButtonGroup>
      </Center>
      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
};

export default ShopByCategories;