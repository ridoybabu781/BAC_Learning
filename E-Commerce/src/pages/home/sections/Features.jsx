import Icon from "/images/features/Icon.png";
import Icon1 from "/images/features/Icon-1.png";
import Icon2 from "/images/features/Icon-2.png";
import Icon3 from "/images/features/Icon-3.png";

let FeaturesSection = () => {
    let features = [
        {
            title: "Free Shipping",
            subTitle: "Free shipping with discount",
            icon: Icon,
        },
        {
            title: "Great Support 24/7",
            subTitle: "Instant access to Contact",
            icon: Icon1,
        },
        {
            title: "100% Secure Payment",
            subTitle: "We ensure your money is save",
            icon: Icon2,
        },
        {
            title: "Money-Back Guarantee",
            subTitle: "30 days money-back",
            icon: Icon3,
        },
    ];

    return (
        <>
            <section className='container m-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b-2 border-gray-200'>
                    {features.map((item, index) => {
                        return (
                            <div
                                className={
                                    "transition-all flex flex-col gap-4 text-center py-10 items-center justify-center hover:border-b-7 hover:border-b-primary"
                                }
                                key={index}
                            >
                                <img
                                    src={item.icon}
                                    className='w-[72px]'
                                    alt=''
                                />
                                <div className='space-y-2'>
                                    <h4 className='text-xl font-semibold'>
                                        {item.title}
                                    </h4>
                                    <p className='text-gray-500'>
                                        {item.subTitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default FeaturesSection;
