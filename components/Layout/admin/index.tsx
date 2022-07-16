/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from './adminLayout.module.scss';
import { LayoutProps } from '@/models/layout'
import React, { useEffect, useState } from 'react'
import { IoChatbubbleOutline, IoHelpOutline, IoHomeOutline, IoLockClosedOutline, IoLogoOctocat, IoLogOutOutline, IoMenuOutline, IoPeopleOutline, IoSearchOutline, IoSettingsOutline } from 'react-icons/io5'


const AdminLayout = ({children}: LayoutProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const navigation = document.getElementById('navigation');
    const main = document.getElementById('main');
    if (toggle) {
      navigation.classList.toggle(styles.active);
      main.classList.toggle(styles.active);
    }
    else{
      navigation.classList.remove(styles.active);
      main.classList.remove(styles.active);
    }
  }, [toggle])


  return (
    <>
{/* =============== Navigation ================ */}
<div className={styles.container}>
  <div id="navigation" className={styles.navigation}>
    <ul>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoLogoOctocat className={styles.io} />
            {/* <ion-icon name="logo-apple" /> */}
          </span>
          <span className={styles.title}>Brand Name</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoHomeOutline className={styles.io} />
            {/* <ion-icon name="home-outline" /> */}
          </span>
          <span className={styles.title}>Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoPeopleOutline className={styles.io} />
            {/* <ion-icon name="people-outline" /> */}
          </span>
          <span className={styles.title}>Customers</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoChatbubbleOutline className={styles.io} />
            {/* <ion-icon name="chatbubble-outline" /> */}
          </span>
          <span className={styles.title}>Messages</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoHelpOutline className={styles.io} />
            {/* <ion-icon name="help-outline" /> */}
          </span>
          <span className={styles.title}>Help</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoSettingsOutline className={styles.io} />
            {/* <ion-icon name="settings-outline" /> */}
          </span>
          <span className={styles.title}>Settings</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoLockClosedOutline className={styles.io} />
            {/* <ion-icon name="lock-closed-outline" /> */}
          </span>
          <span className={styles.title}>Password</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className={styles.icon}>
            <IoLogOutOutline className={styles.io} />
            {/* <ion-icon name="log-out-outline" /> */}
          </span>
          <span className={styles.title}>Sign Out</span>
        </a>
      </li>
    </ul>
  </div>
  {/* ========================= Main ==================== */}
  <div id="main" className={styles.main}>
    <div className={styles.topbar}>
      <div onClick={() => setToggle(!toggle)} className={styles.toggle}>
        <IoMenuOutline className={styles.io} />
        {/* <ion-icon name="menu-outline" /> */}
      </div>
      <div className={styles.search}>
        <label>
          <input type="text" placeholder="Search here" />
          <IoSearchOutline className={styles.io} />
          {/* <ion-icon name="search-outline" /> */}
        </label>
      </div>
      <div className={styles.user}>
        <img src="https://i.postimg.cc/DymsM897/customer01.jpg" />
      </div>
    </div>

    <div className={styles.content}>
    {children}
    </div>
  </div>
</div>

    </>
  )
}

export default AdminLayout