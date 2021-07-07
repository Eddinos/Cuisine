import * as React from "react"
import { Link } from "gatsby"

import {HeaderClass} from "./header.module.scss"

const Header = () => {
    return (
        <header className={HeaderClass}>
            <h1 className="main-heading">
                <Link to="/">Cuisine</Link>
            </h1>
        </header>
    )
}

export default Header