//-----------------------------------------------------  STRUCTS  ------------------------------------------------------------------
//CLASS THAT HOLDS ALL THE INFO ABOUT FACEBOOK STATS
class FacebookBucket {
    constructor() {
        this.members = [];
        this.pageLikes = 0;
        this.likeNames = [];
        this.totalPhotos = 0;
        this.totalVideos = 0;

        this.totalLikes = 0;
        this.totalLoves = 0;
        this.totalLaughs = 0;
        this.totalSads = 0;
        this.totalAnger = 0;
        this.totalReactions = 0
        this.totalEvents = 0;

        this.postsPerDay = 0;
        this.postsPerWeek = 0;
        this.postsPerMonth = 0;
        this.postsPerThreeMonths = 0;
        this.postsPerSixMonths = 0;
        this.postsPerNineMonths = 0;
        this.postsPerYear = 0;
        this.totalPosts = 0;

        this.SharesPerDay = 0;
        this.SharesPerWeek = 0;
        this.SharesPerMonth = 0;
        this.SharesPerThreeMonths = 0;
        this.SharesPerSixMonths = 0;
        this.SharesPerNineMonths = 0;
        this.SharesPerYear = 0;
        this.totalShares = 0;

    }
 }

Facebook = {

    callStats : function(){
        //BUCKET THAT CONTAINS ALL THE DATA -------------------------------------------------------------------
        let FacebookInfo = new FacebookBucket();

        //LETS EXTRACT INFO ABOUT MEMBERS ----------------------------------------------------------------------
        let results;
        try{
        results = HTTP.call('GET', "https://graph.facebook.com/" + Meteor.settings.JEKNOWLEDGE_FACEBOOK_ID + "/events?access_token=" + Meteor.settings.TOKEN_JOEL_FACEBOOK, {headers: {"User-Agent": "Meteor/1.0"}});
        } catch(e) {
        console.log("AN ERROR OCURRED WHILE CALLING FOR THE USERS LIST: ", e);
        }
        let membersResults = JSON.parse(results.content);
        console.log(membersResults);
    }
};
