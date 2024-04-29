//import library
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/styles/navbar.module.css'

export default function Navbar(){
    return (
        <div className="dev">
            <nav className={styles['nav-container']}>
                <div className={styles['nav-left-part']}>
                    <div className={styles['nav-logo']}>
                        <Link href='/'><div className={styles['nav-list-item']}>Rocket Investment</div></Link>
                    </div>
                    <div className={styles['nav-list']}>
                        <Link href='/'><div className={styles['nav-list-item']}>หน้าหลัก</div></Link>
                        <Link href='/content/'><div className={styles['nav-list-item']}>แหล่งความรู้</div></Link>
                        <Link href='/about/'><div className={styles['nav-list-item']}>ติดต่อเรา</div></Link>
                    </div>
                </div>
                <div className={styles['nav-right-part']}>
                    <form className={styles['nav-search']}>
                        <input type='text' value='search...'/>
                        <input type='button' value='search'/>
                    </form>
                </div>
            </nav>
        </div>
    );
}