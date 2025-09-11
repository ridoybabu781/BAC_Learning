import { ShoppingBagIcon, StarIcon } from "@phosphor-icons/react";
import SectionTitleBar from "../components/sectionTitleBar";

import apple from "../../../assets/img/apple.jpg";
import cabbage from "../../../assets/img/china-cabbage.jpg";
import capsicum from "../../../assets/img/capsicum.jpg";
import ladisFinger from "../../../assets/img/ladis-finger.jpg";

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

let ProductCard = ({ data }) => {
    let {
        id,
        haveSale,
        discount,
        title,
        fullPrice,
        discountedPrice,
        image,
        rating,
    } = data;
    return (
        <div className=' border border-gray-200 overflow-hidden rounded-2xl h-full hover:ring hover:ring-primary'>
            <div className='aspect-[1/1]'>
                <img
                    src={image}
                    alt=''
                    className='w-full h-full object-center object-cover'
                />
            </div>
            <div className='flex items-center justify-between p-6'>
                <div>
                    <p className='text-sm text-gray-600'> {title}</p>
                    <p className='text-md'>
                        {discountedPrice}
                        <span className='line-through text-gray-400'>
                            {fullPrice}
                        </span>
                    </p>
                    <div className='flex mt-1.5'>
                        {new Array(5).fill("").map((value, index) => {
                            return (
                                <StarIcon
                                    color='gold'
                                    weight={
                                         rating > index ? 'fill' : 'regular'
                                    }
                                    size={14}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <div className='bg-gray-100 p-4 rounded-full'>
                        <ShoppingBagIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function FeaturedProduct() {
    return (
        <section className='container m-auto mb-12'>
            <SectionTitleBar title={"Featured Product"} nextPageLink={""} />
            <div className='grid grid-cols-4 gap-6'>
                {featuredProdct.map((item, index) => {
                    return <ProductCard data={item} key={index} />;
                })}
            </div>
        </section>
    );
}
