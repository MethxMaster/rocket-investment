import Link from 'next/link';
import Image from 'next/image';
import footerStyles from '@/app/styles/footer.module.css'
export default function Footer(){
    return (
        <div className={footerStyles['footer-container']}>
            
            <div className={footerStyles['footer-logo']}>
                <Image src='/rocket-logo.png' alt='rocket investment' width={100} height={56}/>
            </div>
            <div className={footerStyles['footer-item']}>
                <div className={footerStyles['foot-list']}>
                    <Link href='/'><div className={footerStyles['foot-list-item']}>หน้าหลัก</div></Link>
                    <hr/>
                    <Link href='/content/'><div className={footerStyles['foot-list-item']}>แหล่งความรู้</div></Link>
                    <hr/>
                    <Link href='/about/'><div className={footerStyles['foot-list-item']}>ติดต่อเรา</div></Link>
                </div>
            </div>
            <div className={footerStyles['footer-item']}>
                <b>Copyright &copy;2024</b>&nbsp; Rocket investment ขอสงวนสิทธิ์ทุกประการ
            </div>

        </div>
    );
}