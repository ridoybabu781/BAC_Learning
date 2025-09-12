import { ShoppingBagIcon, StarIcon } from "@phosphor-icons/react";
import SectionTitleBar from "../components/sectionTitleBar";

import apple from "../../../assets/img/apple.jpg";
import cabbage from "../../../assets/img/china-cabbage.jpg";
import capsicum from "../../../assets/img/capsicum.jpg";
import ladisFinger from "../../../assets/img/ladis-finger.jpg";

import ProductCard from "../../../components/ProductCard";

import Products from '../../../public/product.json'

let featuredProdct = [
    {
        id: 1,
        haveSale: true,
        discount: () => (this.haveSale ? 50 : 0),
        title: "Green Apple",
        fullPrice: 20.99,
        discountedPrice: 14.99,
        rating: 5,
        image: apple,
    },
    {
        id: 2,
        haveSale: false,
        discount: () => (this.haveSale ? 50 : 0),
        title: "Chanise Cabbage",
        fullPrice: 14.99,
        discountedPrice: 14.99,
        rating: 4,
        image: cabbage,
    },
    {
        id: 3,
        haveSale: false,
        discount: () => (this.haveSale ? 50 : 0),
        title: "Green Capsicum",
        fullPrice: 14.99,
        discountedPrice: 14.99,
        rating: 3,
        image: capsicum,
    },
    {
        id: 4,
        haveSale: false,
        discount: () => (this.haveSale ? 50 : 0),
        title: "Ladies Finger",
        fullPrice: 14.99,
        discountedPrice: 14.99,
        rating: 4,
        image: ladisFinger,
    },
];

featuredProdct = Products.slice(0,4)

export default function FeaturedProduct() {
    return (
        <section className='container m-auto mb-12'>
            <SectionTitleBar title={"Featured Product"} nextPageLink={""} />
            <div className='grid grid-cols-4 gap-6'>
                {featuredProdct.map((item, index) => {
                    return <ProductCard product={item} key={index} />;
                })}
            </div>
        </section>
    );
}
