import { Fragment } from "react";
import Image from 'next/image'
import Head from "next/head"
import A from "../components/A"

import styles from '../styles/Header.module.scss'
import Link from "next/link";

export default function Header( {title} ) {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={styles.header}>
                <div className="container">
                    <div className={styles.headerBody}>
                        <div className={styles.logo}>
                            <Link href='/'>
                                <Image src='/karaonika-logo.png' width={181} height={31} alt='karaonika logo'/>
                            </Link>
                        </div>
                        <div className={styles.headerNav}>
                            <nav className={styles.navBar}>
                                <A text='Главная' href='/'/>
                                <A text='Видео' href='/video'/>
                                <A text='Галерея' href='/photo'/>
                                <A text='Характеристики' href='/tech'/>
                                <A text='Обзор' href='/review'/>
                                <A text='Вопросы' href='/faq'/>
                                <A text='Отзывы' href='/feedback'/>
                                {/* <A text='Пользователи' href='/users'/> */}
                            </nav>
                            <div className="header-buy">
                                <button>BUY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}