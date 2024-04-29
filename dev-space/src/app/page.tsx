import Image from "next/image";
import navStyles from '@/app/styles/navbar.module.css'
import contentStyles from '@/app/styles/content.module.css'

export default function Home() {
  return (
    <main className="dev">
      <div className={navStyles['empty-space-nav']}>
        {/* EMPTY BOX */}
      </div>
      <div className={contentStyles['content-container']}>
        <div className={contentStyles['content-blog']}>
          blog 1
        </div>
        <div className={contentStyles['content-blog']}>
          blog 2
        </div>
        <div className={contentStyles['content-blog']}>
          blog 3
        </div>
      </div>
    </main>
  );
}
