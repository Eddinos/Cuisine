import * as React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { 
  ShowcaseClassName, 
  ShowcaseClassName__card, 
  ShowcaseClassName__articlesWrapper, 
  ShowcaseClassName__title } from "./showcase.module.scss"

const Showcase = ({ highlighted = [], images = [], title }) => {
    return (
        <div className={ ShowcaseClassName }>
          <h2 className={ ShowcaseClassName__title }>{ title }</h2>
          <div className={ ShowcaseClassName__articlesWrapper }>
            {
              highlighted.map((article, index) => 
                <Link to={article.slug} key={index} className={ ShowcaseClassName__card }>
                  <figure>
                    <GatsbyImage image={getImage(images.find(i => i.name === article.frontmatter.image))}
                                objectFit="cover"
                                alt={article.slug} />
                    <figcaption>
                      <h2>
                        {article.frontmatter.title}
                      </h2>
                    </figcaption>
                  </figure>
                </Link>
              )
            }
          </div>
          <div style={{maxWidth: '80%', margin: '0 auto', textAlign: 'right'}}>
            <Link to="/highlighted-articles">Voir toutes les meilleures recettes</Link>
          </div>
        </div>
        
    )
}

export default Showcase