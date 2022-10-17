const PostSummaryItem = (post) => {
    return(`
   <li class="list-group-item">
                <span class="wd-fg-grey">${post.topic}</span>
                <br>
                <b>${post.userName}</b>
                <i class="fa fa-check-circle mt-1"></i>
                <span class="wd-fg-grey">${post.time}</span>
                <div class="d-flex align-items-center justify-content-center justify-content-end wd-float-right">
                    <img src=${post.image} class="wd-main-content-icon">
                </div>
                <span class="wd-float-done"></span>
                <br>
                <p><b>${post.title}</b></p>
                <span class="wd-fg-grey">${post.tweets}</span>
            </li>
   `);
}
export default PostSummaryItem;

$('#wd-post-summary').append(`
   <div class="col-10 col-lg-7 col-xl-6 text-white list-group">
       ${PostSummaryItem({
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    image: "../../images/react-logo.jpg",
    title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    tweets:'',
})}
       ${PostSummaryItem({
    topic: '',
    userName: 'JavaScript',
    time: '1 day',
    title: 'JavaScript is programming language that can run on browsers as well as desktops',
    image: '../../images/javascript-logo.jpg',
    tweets: '123K',
})
       }
       
       ${PostSummaryItem({
    topic: 'Web Development',
    userName: '',
    title: 'jQuery',
    time: 'last week',
    image: '../../images/j-query-logo.jpg',
    tweets: '122K',
})
}
       ${PostSummaryItem({
    topic: 'Web Development',
    userName: 'NodeJS',
    title: '',
    time: 'last month',
    image: '../../images/node-js-logo.jpg',
    tweets: '120K',
})
}
       
   </div>
`);