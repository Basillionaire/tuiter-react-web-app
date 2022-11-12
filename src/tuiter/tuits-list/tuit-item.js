import React from "react";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";


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
            "dislikes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
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
                        <div className="col-2">
                            <div>
                                <i onClick={() => dispatch(updateTuitThunk({
                                    ...tuit,
                                    replies: tuit.replies + 1
                                }))} className="fa fa-comment me-2"></i>
                                <span className="wd-icon-distribution">{tuit.replies}</span>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <i onClick={() => dispatch(updateTuitThunk({
                                    ...tuit,
                                    retuits: tuit.retuits + 1
                                }))} className="fa fa-retweet me-2"></i>
                                <span className="wd-icon-distribution">{tuit.retuits}</span>
                            </div>
                        </div>

                        <div className="col-3">
                            <div>
                            Likes: {tuit.likes}
                            <i onClick={() => dispatch(updateTuitThunk({
                                ...tuit,
                                likes: tuit.likes + 1
                            }))} className="bi bi-heart-fill me-2 text-danger"></i>
                        </div>
                        </div>
                        <div className="col-3">
                            <div>
                                {tuit.dislikes}
                                <i onClick={() => dispatch(updateTuitThunk({
                                    ...tuit,
                                    dislikes: tuit.dislikes + 1
                                }))} className="fa fa-thumbs-down me-2"></i>
                            </div>
                        </div>
                        <div className="col-2">
                            <i className="fa fa-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;