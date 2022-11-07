import React from "react";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";


const TuitItem = (
    {

        tuit = {
            "_id": "234",
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "spacex-logo.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(

        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle float-start " height={48} width={48} src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10 ms-3">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div className="fw-bolder">{tuit.userName}
                        <i className="fa fa-check wd-blue-icon-bg ms-1">
                        </i>
                        <span className="text-secondary fw-normal ms-1">
                            {tuit.handle} . {tuit.time}
                        </span>
                    </div>
                    <div>{tuit.tuit}</div>
                </div>
                <div>
                    <div className="row ms-5 mt-3">
                        <div className="col-3">
                            <i className="fa fa-comment"></i><span className="wd-icon-distribution ms-3">{tuit.replies}</span>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-retweet"></i><span className="wd-icon-distribution ms-3">{tuit.retuits}</span>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-heart"></i><span className="wd-icon-distribution ms-3">{tuit.likes}</span>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;