import { useEffect, useState } from "react";
import SectionTitleBar from "../components/sectionTitleBar";
import ProductCard from "../../../components/ProductCard";

let BestSeller = () => {
    let [products, setProduct] = useState([]);
    useEffect(() => {
        let getProduct = async (amount) => {
            let res = await fetch("/product.json");
            let data = await res.json();
            setProduct(data.splice(0, amount));
        };
        getProduct(5);
    }, []);

    return (
        <>
            <div>
                <SectionTitleBar title={"Best Seller Products"} />

                <div className='grid grid-cols-5 gap-8 container m-auto '>
                    {products?.map((item, index) => {
                        return <ProductCard product={item} key={index} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default BestSeller;
