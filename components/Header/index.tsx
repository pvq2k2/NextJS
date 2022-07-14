/* eslint-disable @next/next/no-img-element */
import styles from "./header.module.scss";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
type Props = {};

const Header = (props: Props) => {
  // const [show, setShow] = useState(false);
  return (
    <header className="py-5">
        <div className="container w-[1200px] mx-auto flex justify-between items-center">


      {/* <div className="header__top">
        <div className="container">
            
        </div>
    </div>
    <div className={styles.header}>
    <h1>Header</h1>
    <ul className={styles.menu}>
        <li className={styles.menu__link}>
            <Link href="/">Home</Link>
        </li>
        <li className={styles.menu__link}>
            <Link href="about">About</Link>
        </li>
        <li className={styles.menu__link}>
            <Link href="products">Product</Link>
        </li>
    </ul>
</div> */}
      <div>
        <h3 className="logo uppercase font-semibold text-2xl">Shop</h3>
      </div>

      <nav className="pl-3 flex gap-10">
        <ul className="menu flex xl:text-lg lg:text-sm md:text-xs">
          <li>
            <a
              href="#/"
              className="group block relative mx-5 mt-1 hover:text-cyan-400 transition duration-400 ease-in-out"
            >
              HOME
              <div
                className="transition duration-300 ease-in-out bg-cyan-400 absolute left-0 w-full h-[2px] transform scale-x-0 group-hover:scale-x-100"
              ></div>
            </a>
          </li>


          <li>
            <a
              href="#/"
              className="group block relative mx-5 mt-1 hover:text-cyan-400 transition duration-400 ease-in-out"
            >
              PRODUCT
              <div
                className="transition duration-300 ease-in-out bg-cyan-400 absolute left-0 w-full h-[2px] transform scale-x-0 origin-[0_50%] group-hover:scale-x-100"
              ></div>
            </a>
          </li>
          
        </ul>



        <div className="box_icon flex gap-5 items-center">
        <div className="box_search flex gap-4 group">
          <div className="input_search">
            <input type="text"  className="border group-hover:group-hover:block hidden group-focus:block"/>
          </div>
          <AiOutlineSearch className="text-2xl" />
        </div>
        <div className="box_user relative group">
          <div className="i_user">
          <AiOutlineUser className="text-2xl" />
          </div>
          <div className="model_user group-hover:visible invisible absolute border top-12 -left-12 border-[#d6d6d6] rounded-md shadow-md z-10
          before:absolute before:rotate-45 before:w-4 before:h-4  before:top-[-9px] before:bg-white before:right-[53px] before:z-20 before:border-l-[1px] before:border-t-[1px] before:border-[#d6d6d6]">
            <ul>
              <li className="my-3 px-8">
                <a href="">Login</a>
              </li>
              <li className="py-3 px-8">
                <a href="">Register</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="box_cart">
          <MdOutlineShoppingBag className="text-2xl" />
        </div>
        <div className="language relative group">
          <div className="flex items-center rounded-2xl bg-[#f6f6f6] py-[5px] px-2 cursor-pointer">
              <img
                src="https://i.postimg.cc/y8WH1j2t/united-kingdom.png"
                alt="united-kingdom"
                width={24}
                height={24}
              />
            <span className="pl-2">ENG</span>
            <MdOutlineArrowDropDown className="text-2xl"/>
          </div>

          <div 
          className="group-hover:visible invisible absolute border top-12 -right-2 border-[#d6d6d6] rounded-md shadow-md z-10
          before:absolute before:rotate-45 before:w-4 before:h-4  before:top-[-9px] before:bg-white before:right-12 before:z-20 before:border-l-[1px] before:border-t-[1px] before:border-[#d6d6d6]"
          >
            <ul className="pl-2 w-[115px]">
                <li className="py-3">
                    <a href="" className="flex items-center">
                        <img src="https://i.postimg.cc/xTfQ7n50/vietnam.png" alt="vietnam" width={24} height={24} />
                        <span className="pl-2">Việt Nam</span>
                    </a>
                </li>
                <li className="py-3">
                    <a href="" className="flex items-center">
                        <img src="https://i.postimg.cc/y8WH1j2t/united-kingdom.png" alt="united-kingdom" width={24} height={24} />
                        <span className="pl-2">English</span>
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      </nav>


      </div>
    </header>
  );
};

export default Header;
