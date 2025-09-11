import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

let SectionTitleBar = ({ title, nextPageLink }) => {
    return (
        <div className='flex  items-center justify-between container m-auto mb-10 mt-20 w-full '>
            <h1 className='section-heading'>{title}</h1>
            <a
                href={nextPageLink}
                className='flex items-center justify-center gap-4 text-xl text-hard-primary '
            >
                <span> View all</span> <ArrowRightIcon />
            </a>
        </div>
    );
};

export default SectionTitleBar;
