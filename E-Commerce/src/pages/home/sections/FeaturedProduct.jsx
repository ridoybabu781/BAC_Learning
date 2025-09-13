import { ShoppingBagIcon, StarIcon } from "@phosphor-icons/react";
import SectionTitleBar from "../components/sectionTitleBar";

import ProductCard from "../../../components/ProductCard";
import { useEffect, useState } from "react";

export default function FeaturedProduct() {
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
      <div className="grid p-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featuredProdct?.map((item, index) => {
          return <ProductCard product={item} key={index} />;
        })}
      </div>
    </section>
  );
}
