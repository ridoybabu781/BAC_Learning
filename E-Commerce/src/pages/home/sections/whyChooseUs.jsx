import image from "../../../assets/img/whyChooseUs/Image.png";
import image1 from "../../../assets/img/whyChooseUs/Image-1.png";
import { ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react";

let WhyChooseUs = () => {
    return (
        <div className='w-full bg-white my-12'>
            <section className='container m-auto flex items-center gap-20 '>
                <div className="flex gap-12 ">
                    <img src={image1} alt='' className="rounded-2xl h-2/3 object-cover" />
                    <img src={image} alt=''  className="rounded-2xl "/>
                </div>
                <div className="space-y-6 w-1/2">
                    <h1 className="text-5xl l font-semibold">
                        100% Trusted <br /> Organic Food Store
                    </h1>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h2 className="flex items-center gap-2 text-xl ">
                                <CheckCircleIcon
                                    weight='fill'
                                    color='limegreen' 
                                    size={24}
                                />
                                Healthy & natural food for lovers of healthy
                                food.
                            </h2>
                            <p className="ml-8 max-w-[536px] text-gray-500">
                                Ut quis tempus erat. Phasellus euismod bibendum
                                magna non tristique. Pellentesque semper
                                vestibulum elit sed condimentum. Nunc pretium
                                fermentum interdum.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="flex items-center gap-2 text-xl ">
                                <CheckCircleIcon
                                    weight='fill'
                                    color='limegreen' 
                                    size={24}
                                />
                                Healthy & natural food for lovers of healthy
                                food.
                            </h2>
                            <p className="ml-8 max-w-[536px] text-gray-500">
                                Ut quis tempus erat. Phasellus euismod bibendum
                                magna non tristique. Pellentesque semper
                                vestibulum elit sed condimentum. Nunc pretium
                                fermentum interdum.
                            </p>
                        </div>

                    </div>
                    <button className="bg-primary text-white flex items-center  px-10 py-4 rounded-full font-bold"> Shop now <ArrowRightIcon/></button>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseUs