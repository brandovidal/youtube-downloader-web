import { Link } from 'wouter'

import style from './style.module.css'

function Header() {
  return (
    <header className={style.Header}>
      <ul>
        <li className={style.logo}>
          <Link href="/">dracontube</Link>
        </li>
        <li className={style.navItem}>
          <span>Youtube to mp3/mp4</span>
        </li>
      </ul>
    </header>
  )
}

export default Header
