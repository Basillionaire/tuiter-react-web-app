import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <i class="fa fa-search d-flex align-items-center float-start ms-2 mt-2"></i>
        <input type="text" class="form-control d-flex justify-content-center
        float-start rounded-pill align-items-center" placeholder="Search Tuiter"
               style="width: 90%">

        <i class="fa fa-cog fa-2x d-flex justify-content-end" style="color: dodgerblue"></i>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-md-block d-none">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
           </ul>
           <div class="container">
            <img class="img-fluid mt-2" style="width: 100%" src="spacex-shuttle.jpg">
            <div class="wd-photo-caption"><b>SpaceX's Starship</b></div>
        </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
