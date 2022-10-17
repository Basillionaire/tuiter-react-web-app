const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
    <img src=${who.avatarIcon} class="wd-img-shape wd-float-left me-1"/>
      ${who.userName}
      <i class="fa fa-check-circle mt-1"></i>
                <div class="d-flex align-items-center justify-content-center justify-content-end wd-float-right">
                    <button class="btn btn-primary rounded-pill">
                        Follow
                    </button>
                </div>
                <span class="wd-float-done"></span>
                <br>
      @${who.handle}
    </li>
   `);
}
export default WhoToFollowListItem;

$('#wd-who-to-follow').append(`
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white list-group">
       ${WhoToFollowListItem({
        avatarIcon: '../../images/virgin-logo.jpg',
        userName: 'Virgin Galactic',
        handle: 'virgingalactic',
    }
)}
       ${WhoToFollowListItem({
    avatarIcon: '../../images/relativity-space-logo.jpg',
    userName: 'Relativity Space',
    handle: 'relativityspace',
    }
)}
   </div>
`);