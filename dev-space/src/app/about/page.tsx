import Image from "next/image";
import navStyles from '@/app/styles/navbar.module.css'
import contentStyles from '@/app/styles/content.module.css'

export default function About() {
  return (
    <main className="dev">
      <div className={navStyles['empty-space-nav']}>
        {/* EMPTY BOX */}
      </div>
      <div className={contentStyles['content-container']}>
        <h1>About us</h1>
      </div>
    </main>
  );
}
