import * as React from "react"
import { Link } from "gatsby"

// @ts-ignore
import { HeaderClass } from "./header.module.scss"

const Header = ({ title }) => {
    return (
        <header className={HeaderClass}>
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        </header>
    )
}

export default Header