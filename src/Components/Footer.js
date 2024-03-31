import React from "react";
import logo from "../Images/logo.jpg";
import github from "../Images/github.png";
import linkdin from "../Images/linkdin.png";
import email from "../Images/email.png";
import location from "../Images/location.png";
import phone from "../Images/phone.png";

function Footer() {
  return (
    // <>
    //   <footer className=" mt-5 footer p-10 bg-base-200 text-base-content flex justify-around bg-[#202020] text-white">
    //     <nav className="flex flex-col">
    //       <h6 className="footer-title font-semibold text-xl">Services</h6>
    //       <a className="link link-hover pl-2 pt-1">Food delivery</a>
    //       <a className="link link-hover pl-2 pt-1">UPI payment</a>
    //       <a className="link link-hover pl-2 pt-1">grocery</a>
    //       <a className="link link-hover pl-2 pt-1 ">Advertisement</a>
    //     </nav>
    //     <nav className="flex flex-col ">
    //       <h6 className="footer-title font-semibold text-xl">Company</h6>
    //       <a className="link link-hover underline pl-2 pt-1 cursor-pointer">
    //         About us
    //       </a>
    //       <a className="link link-hover underline pl-2 pt-1 cursor-pointer">
    //         Contact
    //       </a>
    //       <a className="link link-hover underline pl-2 pt-1 cursor-pointer">
    //         Jobs
    //       </a>
    //       <a className="link link-hover underline pl-2 pt-1 cursor-pointer">
    //         Press kit
    //       </a>
    //     </nav>
    //     <nav className="flex flex-col">
    //       <h6 className="footer-title font-semibold text-xl">Legal</h6>
    //       <a className="link link-hover pl-2 pt-1">Terms of use</a>
    //       <a className="link link-hover pl-2 pt-1">Privacy policy</a>
    //       <a className="link link-hover pl-2 pt-1">Cookie policy</a>
    //     </nav>
    //   </footer>
    //   <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content bg-[#202020] text-white border-base-300">
    //     <aside className="items-center grid-flow-col">
    //       <svg
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fillRule="evenodd"
    //         clipRule="evenodd"
    //         className="fill-current"
    //       >
    //         <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    //       </svg>
    //       <p>
    //         FoodFire. <br />
    //         Food ordering service
    //       </p>
    //     </aside>
    //     <nav className=" mt-5">
    //       <div className="flex justify-around">
    //         <a>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             className="fill-current"
    //           >
    //             <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
    //           </svg>
    //         </a>
    //         <a>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             className="fill-current"
    //           >
    //             <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
    //           </svg>
    //         </a>
    //         <a>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             className="fill-current"
    //           >
    //             <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
    //           </svg>
    //         </a>
    //       </div>
    //     </nav>
    //   </footer>
    // </>

    <>
      <footer className=" w-full z-10 dark:bg-dark lg:pt-[120px] bg-[#acabab] flex justify-center">
        <div className="container ">
          <div className=" flex flex-wrap ">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                  <img
                    src={logo}
                    alt="logo"
                    className="max-w-full hidden dark:block mix-blend-multiply"
                  />
                </a>
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                  Order delicious meals easily, enjoy doorstep delivery,
                  exceptional dining experience
                </p>
                <p className="flex items-center text-sm font-medium text-dark ">
                  <span className="mr-3 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clippath="url(#clip0_941_15626)">
                        <path
                          d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_15626">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>7906154013</span>
                </p>
              </div>
            </div>

            <LinkGroup header="Our Services">
              <NavLink label="Food delivery" />
              <NavLink  label="UPI payments" />
              <NavLink label="Grocery" />
              <NavLink  label="Advertisement" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/about" label="About Foodfire" />
              <NavLink link="/connect" label="Contact & Support" />
              <NavLink link="/#" label=" History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink  label="Premium Support" />
              <NavLink  label="Our Services" />
              <NavLink  label="Know Our Team" />
              <NavLink label="Download App" />
            </LinkGroup>

            <div className="w-full  px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark ">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center">
                  <a
                    href="https://www.linkedin.com/in/gaurav-lakhera/"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full   text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <img src={linkdin}></img>
                  </a>
                  <a
                    href="https://github.com/GauravLakhera"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full  text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <img src={github}></img>
                  </a>
                  <a
                    href="mailto:gauravlakhera01@gmail.com"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <img src={email}></img>
                  </a>
                  <a
                    href="tel:+917906154013"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full   text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <img src={phone}></img>
                  </a>
                </div>
                <p className="text-base text-body-color dark:text-dark-6">
                  &copy; 2024 FoodFire
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-b" lack>
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-black hover:text-blue-700 dark:text-black"
      >
        {label}
      </a>
    </li>
  );
};
