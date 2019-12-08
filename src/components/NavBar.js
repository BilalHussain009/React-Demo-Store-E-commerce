import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { setSort } from '../actions/sort';
import { setHeading } from '../actions/headings';
import { firebase } from '../firebase/firebase';

export class NavBar extends React.Component {

    setAll = () => {
        localStorage.setItem();
        this.props.setSort('all');

    }
    setSocks = () => {
        localStorage.setItem('category', 'socks')
        this.props.setSort('all');
        this.props.setHeading('SET_SOCKS');
    }
    setHoods = () => {
        localStorage.setItem('category', 'explore');
        this.props.setSort('all');
        this.props.setHeading('SET_HOODIES');
    }
    setHoodies = () => {
        this.props.setSort('hoodies')
    }
    setCreators = () => {
        localStorage.setItem('category', 'creators');
        this.props.setSort('all');
        this.props.setHeading('SET_CREATORS');


    }
    setMugs = () => {
        this.props.setSort('mugs');
        localStorage.setItem('category', 'mugs');
        this.props.setHeading('SET_MUGS');
    }
    setPhoneCase = () => {
        this.props.setSort('phonecase');
        localStorage.setItem('category', 'phonecase');
        this.props.setHeading('SET_PHONECASE');
    }
    userprofile = () => {
        if (firebase.auth().currentUser == null) {
            return "Login"
        }
        else if (firebase.auth().currentUser.displayName == null) {
            var usermail = firebase.auth().currentUser.email;
            var name = usermail.substring(0, usermail.lastIndexOf("@"));
            return name;
        }

        else
            return firebase.auth().currentUser.displayName.split(' ').slice(0, 1).join(' ');
    }
    userprofilepic = () => {
        if (firebase.auth().currentUser == null) {
            return 'https://i.ibb.co/ssp09kd/585e4bf3cb11b227491c339a.png';
        }
        else if (firebase.auth().currentUser.photoURL == null) {
            return 'https://i.ibb.co/ssp09kd/585e4bf3cb11b227491c339a.png';
        }

        else
            return firebase.auth().currentUser.photoURL;
    }
    render() {
        return (

            <div className="navbar">

                <Link to='/' className="logo" >Store</Link>
                <Helmet>

                    <script>
                        {`
             var navbar = document.querySelector('.navbar')

             navbar.querySelector('.toggle').addEventListener('click',()=>{
                 
                 navbar.classList.toggle('collapsed');
                })
             
             
             
             window.addEventListener('scroll',(e)=>{
                 
                 let windowY = window.pageYOffset
                 
                 let navbarHeight = document.querySelector('.navbar').offsetHeight
                 
                 if(windowY>navbarHeight) navbar.classList.add('sticky')
                 else navbar.classList.remove('sticky')
                 
                 
                 
                 
             })
             `}
                    </script>
                </Helmet>

                <ul className="links">

                    <li><Link to='/products' onClick={this.setSocks}>Socks</Link></li>

                    <li><Link to='/products' onClick={this.setMugs} >Mugs</Link></li>
                    <li><Link to='/products' onClick={this.setPhoneCase}>Phone Case</Link></li>
                    <li><Link to='/products' onClick={this.setCreators}>Creators</Link></li>
                    <li><Link to='/aboutus' onClick={this.setCreators}>About Us</Link></li>
                    <li>
                        <Link to={firebase.auth().currentUser ? '/userprofile' : '/loginPage'}>
                            <div className='LoginBox'>
                                <img className="LoginButton" src={this.userprofilepic()}></img>
                                <p className='LoginText'>{this.userprofile()}</p>
                            </div>
                        </Link>
                    </li>
                    

                </ul>


                <Link to="/cart" className="right">
                    <button type="button" className='cartbutton' id='cartButton' >
                        Cart
             </button>
                </Link>

                <div className="toggle">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>



            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    setSort: (sortby) => dispatch(setSort(sortby)),
    setHeading: (heading) => dispatch(setHeading(heading))

});
const mapStateToProps = (state) => ({
    auth: state.auth,
    sort: state.sort
})
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);