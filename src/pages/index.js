import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Showcase from "../components/showcase"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes
  const highlightedArticles = data.highlighted.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Recettes de Manue et Eddine" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Recettes de Manue et Eddine" />
      <Showcase highlighted={ highlightedArticles } 
                title="Les recettes du moment" />
      <div className="global-wrapper">
        <h4 style={{ paddingTop: 24, paddingBottom: 0 }}>
          Les dernières recettes
        </h4>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post?.frontmatter?.title || post?.fields?.slug || post?.slug

            return (
              <li key={post?.fields?.slug || post?.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields?.slug || post?.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          title
          description
          date(formatString: "MMMM DD, YYYY")
        }
        excerpt
      }
    }
    highlighted: allMdx(
      filter: {frontmatter: {highlight: {eq: true}}}
      limit: 3
      sort: {fields: frontmatter___date}
    ) {
      nodes {
        frontmatter {
          title
          image
          featuredImage {
            childImageSharp {
              gatsbyImageData (
                aspectRatio: 1
                placeholder: BLURRED
                )
            }
          }
        }
        slug
      }
    }
  }
`
