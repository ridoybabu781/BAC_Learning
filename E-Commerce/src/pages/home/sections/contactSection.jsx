let Contact = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-8 container m-auto gap-5 my-12'>
            <div className='grid lg:grid-cols-2 gap-5'>
                <div className='p-6 border border-gray-200 space-y-1'>
                    <img
                        src='/images/contact-icons/Icon.png'
                        alt=''
                        srcset=''
                    />
                    <p className='text-sm '> OUR LOCATION </p>
                    <p className='text-xs'>
                        1901 Thornridge Cir. Shiloh, Washington DC 20020, United
                        States
                    </p>
                </div>
                <div className='p-6 border border-gray-200 space-y-1'>
                    <img
                        src='/images/contact-icons/Icon-1.png'
                        alt=''
                        srcset=''
                    />
                    <p className='text-sm '>CALL US 24/7 </p>
                    <p className='text-xl text-primary'>(303) 555-0105</p>
                </div>
            </div>
            <div className='p-6 border border-gray-200 space-y-1'>
                <img src='/images/contact-icons/Icon-2.png' alt='' srcset='' />
                <p className='text-sm '> SUBSCRIBE TO NEWSLETTER </p>
                <div className="flex border border-gray-200 items-center justify-between rounded-full ">
                    <input type='text' placeholder="Enter your email " className="w-full px-5 py-2"/>
                    <button className="rounded-full bg-primary text-white font-semibold px-6 py-2"> Subscribe </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
