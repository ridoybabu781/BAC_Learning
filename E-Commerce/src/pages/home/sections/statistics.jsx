import stateBg from "/images/state-bg.png";

let StateDisplayCard = ({ title, subTitle }) => {
    return (
        <div className='p-10 text-center bg-gray-900/60 lg:bg-gray-900 '>
            <p className='text-3xl lg:text-6xl text-primary'> {title}</p>
            <p className='text-lg text-white'>{subTitle}</p>
        </div>
    );
};

export default function Statistics() {
    let stateData = [
        {
            title: "37+",
            subTitle: "Years of Hard Work",
        },
        {
            title: "500k+",
            subTitle: "Happy Customer",
        },
        {
            title: "28+",
            subTitle: "Qualified Team Member",
        },
        {
            title: "750k+",
            subTitle: "Monthly Orders",
        },
    ];
    return (
        <div
            className='bg-no-repeat bg-cover '
            style={{ backgroundImage: `url(${stateBg})` }}
        >
            <section className='py-20 gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-12 container m-auto'>
                {stateData.map((item, index) => {
                    let { title, subTitle } = item;
                    return (
                        <StateDisplayCard title={title} subTitle={subTitle} key={index} />
                    );
                })}
            </section>
        </div>
    );
}
