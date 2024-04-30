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
                        <div className={styles['head-logo']}>
                            <Image src='/rocket-logo.png' alt='rocket investment' width={100} height={56}/>
                        </div>
                        <Link href='/'><div>Rocket Investment</div></Link>
                        {/* <Image src="/logo.png" alt='dfd' width={200} height={50}/> */}
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