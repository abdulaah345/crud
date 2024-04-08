import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <>
            <ul className="list-unstyled">
                <li>
                    <Link to={'/pro'}>get all product</Link>
                </li>

                <li>
                    <Link to={'/pro'}>get all categories</Link>
                </li>
            </ul>
        </>
    );
}
export default Sidebar;