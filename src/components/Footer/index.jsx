import style from './style.module.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={style.Footer}>
      <label> &copy; {year} dracontube</label>
      <label>
        <a href="https://github.com/brandovidal" target="_blank" rel="noopener noreferer">
          @brandovidal
        </a>
      </label>
    </footer>
  )
}

export default Footer
