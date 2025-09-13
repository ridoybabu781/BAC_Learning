import { ShoppingBagIcon, StarIcon } from "@phosphor-icons/react";
import SectionTitleBar from "../components/sectionTitleBar";

import ProductCard from "../../../components/ProductCard";
import { useEffect, useState } from "react";

export default function FeaturedProduct() {
<<<<<<< HEAD
  const [Products, setProducts] = useState();

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const featuredProdct = Products?.splice(0, 4);

  return (
    <section className="container m-auto mb-12">
      <SectionTitleBar title={"Featured Product"} nextPageLink={""} />
      <div className="grid grid-cols-4 gap-6">
        {featuredProdct?.map((item, index) => {
          return <ProductCard product={item} key={index} />;
        })}
      </div>
    </section>
  );
=======
    return (
        <section className='container m-auto mb-12'>
            <SectionTitleBar title={"Featured Product"} nextPageLink={""} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-12'>
                {featuredProdct.map((item, index) => {
                    return <ProductCard product={item} key={index} />;
                })}
            </div>
        </section>
    );
>>>>>>> 90a121d (Made home page mobile responsive)
}
