import React from "react";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.css';
const HomeComponent = () => {
    return(
        <>
            <div className="col-2">
                <img className="rounded-circle wd-float-left " height={48} width={48} src="/images/harry-potter-logo.jpg"/>
            </div>
            <div className="row position-relative">
                <div className="col-12">
                    <div className="fw-bolder">HarryPotter
                        <i className="fa fa-check wd-blue-icon-bg ms-1">
                        </i>
                        <span className="text-secondary fw-normal ms-1">
                            @HarryPotter . 23h
                        </span>
                        <i className="float-end">...</i>
                    </div>
                    <div>Harry Potter fans rejoice as 20th reunion special airs unseen footage. Daniel Radcliffe thanks Rubeus Hagrid actor for being "like a father".
                    </div>

                    <div className="position-relative mt-2">
                        <img src="/images/harry-potter-logo.jpg" className="w-100 rounded" height={350}/>
                    </div>

                    <i className="fa fa-comment mt-3"></i><span className="wd-icon-distribution ms-3">595</span>
                    <i className="fa fa-retweet mt-3 ms-5"></i><span className="wd-icon-distribution ms-3">1168</span>
                    <i className="fa fa-heart mt-3 ms-5"></i><span className="wd-icon-distribution ms-3">11.1K</span>
                    <i className="fa fa-upload mt-3 ms-5"></i>
                    <div className="mt-3 wd-blue-text">
                        Show this Thread
                    </div>
                </div>
            </div>
            <div className="col-2">
                <img className="rounded-circle mt-3 wd-float-left " height={48} width={48} src="/images/tesla-logo.jpg"/>
            </div>
            <div className="row position-relative mt-3">
                <div className="col-12">
                    <div className="fw-bolder">Tesla
                        <i className="fa fa-check wd-blue-icon-bg ms-1">
                        </i>
                        <span className="text-secondary fw-normal ms-1">
                            @Tesla . 2d
                        </span>
                        <i className="float-end">...</i>
                    </div>
                    <div>Elon Musk to hand deliver 100 Teslas to Northeastern students who graduated with a 4.0 GPA in 2017.
                    </div>
                    <div className="list-group mt-3 border align-content-start wd-round-list">
                        <ul>
                            <img className="rounded-circle float-start align-content-start mt-2 " height={20} width={20} src="/images/tesla-logo.jpg"/>
                            <div className="fw-bolder mt-1">Elon Musk
                                <i className="fa fa-check mt-1 wd-blue-icon-bg ms-1"></i>
                                <span className="text-secondary mt-1 fw-normal ms-1">@ElonMusk . 15h</span>
                            </div>
                            <div className="align-content-start float-none">Very excited to see the wonderful students at Northeastern. Go Huskies!
                            </div>
                        </ul>
                    </div>
                </div>
                <div>

                    <i className="fa fa-comment mt-3"></i><span className="wd-icon-distribution ms-3">5,346</span>
                    <i className="fa fa-retweet mt-3 ms-5"></i><span className="wd-icon-distribution ms-3">1,601</span>
                    <i className="fa fa-heart mt-3 ms-5"></i><span className="wd-icon-distribution ms-3">19.2K</span>
                    <i className="fa fa-upload mt-3 ms-5"></i>
                </div>
            </div>
        </>
    );
};
export default HomeComponent;