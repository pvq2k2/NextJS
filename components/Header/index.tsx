import styles from './header.module.scss';
import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
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
            <Link href="product">Product</Link>
        </li>
    </ul>
</div>
  )
}

export default Header