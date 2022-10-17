import posts from "./posts";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    return(`
   <ul class="list-group align-bottom align-content-center">
   ${PostSummaryItem({posts})}

   </ul>
   `);
}
export default PostSummaryList;

$('#wd-post-summary').append(`
   <div class="col-10 col-lg-7 col-xl-6 text-white">
       ${PostSummaryList()}
   </div>
`);