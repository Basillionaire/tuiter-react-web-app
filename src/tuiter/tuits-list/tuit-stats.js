import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import "./index.css";

const Tuitstats = (
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
    return(
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
    );
};
export default Tuitstats;
