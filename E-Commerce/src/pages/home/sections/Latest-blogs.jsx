import {
    ArrowRightIcon,
    ChatIcon,
    PersonIcon,
    TagIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

let BlogCard = ({data}) => {
    let { image, text, id } = data; //pretending to be nerd ;
    console.log(image , text , id);
    return (
        <div className='bg-white rounded-md overflow-hidden'>
            <img src={'/images/blog-images/Image-' + id + '.png'} className='w-full' />
            <div className='px-6 py-4 border border-gray-200   space-y-4'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-start gap-2 text-gray-500'>
                        <TagIcon /> Foods
                        <PersonIcon /> By admin
                        <ChatIcon /> 54 Comments
                    </div>
                    <p className='text-gray-700'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque quae, voluptate numquam iure iusto
                    </p>
                </div>
                <button className=' text-primary flex items-center font-bold rounded-full gap-2'>
                    Read more <ArrowRightIcon weight='fill' />
                </button>
            </div>
        </div>
    );
};

let LatestBlogs = () => {
    let [blogs, setBlogs] = useState([]);
    let [loading, setIsloading] = useState(true);
    useEffect(() => {
        let getBlogs = async () => {
            let res = await fetch("/blog.json");
            let data = await res.json();
            setBlogs(data.blogs.splice(0,3));
            setIsloading(false);
        };
        getBlogs();
    }, []);
    return (
        <div className='bg-[url(/images/blogs-bg.png)] bg-cover bg-no-repeat py-12 border-b border-gray-200 pb-24'>
            <div className='container m-auto py-12 p-8 md:p-0'>
                <h1 className='text-3xl font-semibold text-center my-8'>
                    Latest News
                </h1>
                {loading ? (
                    <div className='border border-gray-200 flex items-center justify-center text-md rounded-md aspect-video w-full'>
                        Loading blogs
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {blogs.map((blog, index) => {
                            return <BlogCard data={blog}/>
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LatestBlogs;
