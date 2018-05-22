import Head from './head';
import Nav from './nav';
import { string } from 'prop-types'
import Footer from './footer';
const title = '';
const Wrapper = (props) => 
(
     <div>
          <Head title = {props.title}/>
          <Nav />
            {props.children}
          <Footer />
    </div>
);
Wrapper.prototype = {
 title : string
}
export default Wrapper;

