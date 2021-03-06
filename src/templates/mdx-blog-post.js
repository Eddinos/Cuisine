import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Ingredients from "../components/ingredients"

import IngredientsContext from '../providers/ingredients'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data?.site?.siteMetadata?.title || `EM cuisine`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post global-wrapper"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section itemProp="articleBody">
            <IngredientsContext.Provider value={post.frontmatter.ingredients}>
              <MDXRenderer components={Ingredients}>{post.body}</MDXRenderer>
            </IngredientsContext.Provider>
            
        </section>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/` + previous.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={'/' + next.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String, 
    $previousPostId: String
    $nextPostId: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        author
        ingredients {
          label
          quantity
        }
      }
    },
    previous: mdx(id: { eq: $previousPostId }) {
      slug
      frontmatter {
        title
      }
    },
    next: mdx(id: { eq: $nextPostId }) {
      slug
      frontmatter {
        title
      }
    }
  }
`
