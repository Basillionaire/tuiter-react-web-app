import React from "react";
import TuitsList from "../tuits-list";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NewHomeComponent = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <Link to="/tuiter/tuiter" className={`list-group-item ${active === 'tuiter'?'active':''}`}>
            <TuitsList/>
        </Link>
    );
}
export default NewHomeComponent;