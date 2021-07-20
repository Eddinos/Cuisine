import * as React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Showcase = ({ highlighted = [], images = [] }) => {
    return (
        <div>
          {
            highlighted.map((article, index) => 
              <div key={index}>
                <figure>
                  <GatsbyImage image={getImage(images.find(i => i.name === article.frontmatter.image))}
                               objectFit="cover"
                               alt={article.slug} />
                  <figcaption>{article.frontmatter.title}</figcaption>
                </figure>
              </div>
            )
          }
        </div>
        
    )
}

export default Showcase