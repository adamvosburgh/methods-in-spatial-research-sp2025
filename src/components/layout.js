import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className= {container}>
      <title>{pageTitle}| {data.site.siteMetadata.title}</title>      
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/tutorials" className={navLinkText}>Tutorials</Link></li>
          <li className={navLinkItem}><Link to="/assignments" className={navLinkText}>Assignments</Link></li>
          <li className={navLinkItem}><Link to="/resources" className={navLinkText}>Resources</Link></li>
          <li className={navLinkItem}>
        <a 
          href="https://miro.com/app/board/uXjVLpMXxuo=/" 
          className={navLinkText} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Miro
        </a>
          </li>
          <li className={navLinkItem}>
        <a 
          href="https://drive.google.com/open?id=1G0S6lEdIPNVhYg3yqhHY72PjEwA_mfdH&usp=drive_fs" 
          className={navLinkText} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Drive
        </a>
          </li>
          <li className={navLinkItem}>
        <a 
          href="https://calendar.app.google/iLNgGU6wNgEsbXcY9" 
          className={navLinkText} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Office Hours
        </a>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}



export default Layout