import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
         ${
        who.map(whoArr => {
            return(WhoToFollowListItem({whoArr}));
        })
    }

       </ul>

   `);
}
export default WhoToFollowList;

$('#wd-who-to-follow').append(`
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white list-group">
   <li class="list-group-item"><b>Who to Follow</b></li>
       ${WhoToFollowList()}
   </div>
`);