import style from './style.module.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={style.Footer}>
      <label> &copy; {year} dracontube </label>
    </footer>
  )
}

export default Footer
