import {
  FacebookLogoIcon,
  LinkedinLogoIcon,
  PinterestLogoIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";
import { Logo } from "../logo";
import footerBg from "/images/footer-bg.png";

let Section = ({ title, links }) => {
  console.log(links);
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-light"> {title} </h3>
      <div className="h-1 w-8 bg-primary rounded-full"></div>
      <div className="mt-5 text-gray-400 *:hover:text-gray-50 flex flex-col font-light space-y-1">
        {links?.map((item, index) => {
          let { link, text } = item;
          return (
            <a href={link} key={index}>
              {" "}
              {text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default function Footer(params) {
  let section1 = [
    {
      link: "#",
      text: "My Account",
    },
    {
      link: "#",
      text: "Order history",
    },
    {
      link: "#",
      text: "Shopping card",
    },
    {
      link: "#",
      text: "Wishlist",
    },
  ];
  let section2 = [
    {
      link: "#",
      text: "Contact",
    },
    {
      link: "#",
      text: "FAQ",
    },
    {
      link: "#",
      text: "Privacy Policy",
    },
    {
      link: "#",
      text: "Terms & Condtion",
    },
  ];
  let section3 = [
    {
      link: "#",
      text: "About",
    },
    {
      link: "#",
      text: "Shop",
    },
    {
      link: "#",
      text: "Track order",
    },
    {
      link: "#",
      text: "Product",
    },
  ];

  return (
    <>
      <footer
        className="bg-gray-950 bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className=" container m-auto text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-12 py-24 lg:gap-12 gap-24">
          {/* footer about  */}
          <div className="space-y-5 ">
            <Logo />
            <p className="text-gray-400">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magn.
            </p>
            <div className="flex items-center text-gray-300 space-x-1">
              <div className="w-fit h-fit aspect-square bg-primary text-white p-4 rounded-full">
                <FacebookLogoIcon weight="fill" size={24} />
              </div>
              <div className="w-fit h-fit aspect-square hover:bg-primary text-white p-4 rounded-full">
                <TwitterLogoIcon weight="fill" size={24} />
              </div>
              <div className="w-fit h-fit aspect-square hover:bg-primary text-white p-4 rounded-full">
                <PinterestLogoIcon weight="fill" size={24} />
              </div>
              <div className="w-fit h-fit aspect-square hover:bg-primary text-white p-4 rounded-full">
                <LinkedinLogoIcon weight="fill" size={24} />
              </div>
            </div>
          </div>

          {/* my account section  */}
          <Section title={"My account"} links={section1} />

          {/* help section  */}
          <Section title={"help"} links={section1} />

          {/* Proxy section  */}
          <Section title={"Proxy"} links={section3} />

          {/* Download mobile app section  */}
          <div className="space-y-4">
            <h3 className="text-xl font-light"> Download Mobile App</h3>
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <div className="flex justify-between gap-4 lg:flex-col">
              <img className="lg:w-3/4" src="/images/App Store.png" alt="" />
              <img className="lg:w-3/4" src="/images/Google Play.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
