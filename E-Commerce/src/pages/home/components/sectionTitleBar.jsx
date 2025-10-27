import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

let SectionTitleBar = ({ title, nextPageLink }) => {
    return (
        <div className='flex  items-center justify-between container m-auto mb-10 mt-20 w-full px-12 md:px-0'>
            <h1 className='section-heading'>{title}</h1>
            <Link
                to={nextPageLink}
                className='flex items-center justify-center gap-4 text-xl text-hard-primary '
            >
                <span> View all</span> <ArrowRightIcon />
            </Link>
        </div>
    );
};

export default SectionTitleBar;
