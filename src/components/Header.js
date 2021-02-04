/** 
 *  Show the Header with App title
 */

const Header = () => {
    return (
        <nav className="pink darken-2">
            <div className='nav-wrapper brand-logo' style={{marginLeft: '10px', marginRight: '10px'}}>
                <a href='/'>GET A MOVIE</a>
            </div>
        </nav>
    );   
}

export default Header;