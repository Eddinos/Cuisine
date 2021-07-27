import * as React from "react"

import Header from "./header"

const Layout = ({ location, title, children }) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <Header title={title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {title}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
