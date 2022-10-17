const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <a class="list-group-item" href="/">
       <i class="fa fa-home me-1"></i>Home</a>
       <a class="list-group-item active" href="/">
       <i class="fa fa-hashtag me-1"></i>Explore</a>
       <a class="list-group-item" href="/">
       <i class="fa fa-bell me-1"></i>Notifications</a>
       <a class="list-group-item" href="/">
       <i class="fa fa-envelope me-1"></i>Messages</a>
       <a class="list-group-item" href="/">
       <i class="fa fa-bookmark me-1"></i>Bookmarks</a>
       <a class="list-group-item" href="/">
       <i class="fa fa-list me-1"></i>Lists</a>
       <a class="list-group-item" href="/">
       <i class="fa fa-user me-1"></i>Profile</a>
       <a class="list-group-item" href="/">
       <i class="fa fa-circle me-1"></i>More</a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

$('#wd-navigation').append(`
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
       ${NavigationSidebar()}
   </div>
`);