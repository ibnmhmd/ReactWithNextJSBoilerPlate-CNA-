import Head from './head'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})



const Nav = () =>
(
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-md-none d-xl-block d-lg-block p-0">
        <div className="container">
         <div className="row">
          <div className="col-xl-4 col-lg-4"></div>
          <div className="col-xl-8 col-lg-8 text-uppercase text-bold"><div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mt-0 mb-0 ml-auto mr-auto">
            <li className="nav-item active">
                 <Link href = "/"><a className="nav-link" >Home</a></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <Link  href = {{ pathname: '/about' , query: { name : 'about', page: 'about page'}}} as = '/about'><a className="nav-link">About</a></Link>
            </li>
          </ul>
        </div></div>
        </div></div>
        <style jsx>{
          `.row
          {
            width: 100%;
          }
          li {
            padding: 1.5rem;
          }
          li a {
            font-weight: bold;
          }`
        }</style>
</nav>  
)

export default Nav
