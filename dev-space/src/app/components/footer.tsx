import Link from 'next/link';
import footerStyles from '@/app/styles/footer.module.css'
export default function Footer(){
    return (
        <div className={footerStyles['footer-container']}>
            
            <div className={footerStyles['footer-logo']}>
                <h1>LOGO</h1>
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