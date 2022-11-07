import React from "react";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.css';
import {Link} from "react-router-dom";

const ProfileItem = (
    {
        profile = {
            "firstName": "Basil",
            "lastName": "Coughlan",
            "handle": "@basilcoughlan",
            "profilePicture": "basil-coughlan.jpg",
            "bannerPicture": "tree-background.jpg",
            "bio": "Northeastern MSCS student. Specialty in Java and learning Web Development. Subscribe to my GitHub to see my various projects.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",
            "dateOfBirth": "1/1/1999",
            "dateJoined": "4/2009",
            "followingCount": 340,
            "followersCount": 223
        }
    }
) => {

return(
    <div className="row">
        <div className="col-12">
            <div className="position-relative">
            <img className="w-100" height={300} src={`/images/${profile.bannerPicture}`}/>
            <img className="rounded-circle wd-nudge-down-picture position-absolute" height={200} width={200} src={`/images/${profile.profilePicture}`}/>
                <Link to="/tuiter/edit-profile">
                <button className="rounded-pill btn float-end mt-2 ps-3 pe-3 fw-bold wd-white-button border-dark">
                    Edit Profile
                </button>
            </Link>
            </div>

            <div className="fw-bold wd-large-text position-relative mt-5 ">
                {profile.firstName} {profile.lastName}
            </div>
            <div className="text-secondary mt-5">
                {profile.handle}
            </div>
            <div className="mt-3">
                {profile.bio}
            </div>
            <div className="row">
            <div className="col-8 mt-2">
                <i className="fa fa-map-marker"></i><span className="ms-2 wd-icon-distribution text-secondary">{profile.location}</span>
                <i className="fa fa-birthday-cake ms-3"></i><span className="ms-2 wd-icon-distribution text-secondary"> Born {profile.dateOfBirth}</span>
                <i className="fa fa-calendar ms-3"></i><span className="ms-2 wd-icon-distribution text-secondary"> Joined {profile.dateJoined}</span>
            </div>
            </div>
            <div className="row">
            <div className="col-6 mt-3 fw-bold">
                {profile.followingCount} <span className="text-secondary fw-normal">
                Following
            </span>
                <span className="ms-4">
                    {profile.followersCount} <span className="text-secondary fw-normal">
                Followers
            </span>
            </span>
            </div>
            </div>


        </div>
    </div>


);
};
export default ProfileItem;