import Link from 'next/link'
import Wrapper from '../components/wrapper';
import Fetch from 'isomorphic-unfetch';
 class About extends React.Component {
    

    constructor (props) {
        super(props);
        this.state = {dataState: ''};
        this._fetch = this._fetch.bind(this);
    }
    static getInitialProps ({ query : { name, page } }) {
        return { name , page }
      }
    
    componentWillMount() {
        console.log('mounting . . .')
    }


    formBuilder(data) {
        let tag = '<h3>'+`${data}`+'</h3>';
        return tag ;
    }
    componentDidMount() {

    }
     _fetch() {
        
    //    const res = await Fetch('http://crm-dev.tools.kskdigital.com/index.php?module=Home&action=getEditFieldHTML&field=cancellationdropdown_c&current_module=ksk05_Header3&id=000000128&view=DetailView&to_pdf=true');
    //    const data = await res;
    //    console.log(data);
    // var opt = "";
    // for(var i in str) {
    //     if(str[i] !== '\n' && str[i] !== '\t'){
    //         opt += str[i];
    //     }
    // }
    // console.log(opt);
    }
    render() {
        return (
            <Wrapper title = "About Page">
               <h2>About page works</h2>
                <div className = 'inject'></div>
               <button onClick = {this._fetch}>Inject </button>

          </Wrapper>
        )
    }
}

export default About ;
// export default () => (
//     <Wrapper title = "About Page">
//         <h2>About page works</h2>
//     </Wrapper>
// )