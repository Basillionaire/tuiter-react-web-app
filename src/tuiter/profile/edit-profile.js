import React from "react";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.css';

const EditProfile = (
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
                <div className="position-relative fw-bold wd-edit-profile-text">
                    Edit profile
                    <button className="rounded-pill float-end ps-3 pe-3 fw-bold wd-black-button">
                        Save
                    </button>
                    <img className="w-100 mt-2" height={300} src={`/images/${profile.bannerPicture}`}/>
                    <img className="rounded-circle wd-nudge-down-picture position-absolute mt-5" height={150} width={150} src={`/images/${profile.profilePicture}`}/>
                </div>
            <div className="wd-form-placement position-relative">
                <input
                       value={profile.firstName + ' ' + profile.lastName}
                       className="form-control w-100"/>
            </div>

            </div>
        </div>
    );
};
export default EditProfile;