const  profileDetail = { //create an object
    
    "fullName": "Aayushma Khanal",
    "email": "aayushmakhanal@gmail.com",
    "numberOfLikes": 100,
    "comments": ["x", "y", "z"],
    "bookmarks": false,
    "friendsName": ["xyz", "abc"]

}
function IncrementLikes() {
    profileDetail.numberOfLikes++;
    console.log("Number of likes:", profileDetail.numberOfLikes);
}
function addComment() {
    profileDetail.comments.push("New comment");
    console.log("Comments:", profileDetail.comments);
}
function removeComment() {
    profileDetail.comments.pop();
    console.log("Comments:", profileDetail.comments);
}
function addFriend() {
    profileDetail.friendsName.push("New friend");
    console.log("Friends:", profileDetail.friendsName);
}
function removeFriend() {
    profileDetail.friendsName.pop();
    console.log("Friends:", profileDetail.friendsName);
}
function toggleBookmark() {
    profileDetail.bookmarks = !profileDetail.bookmarks;
    console.log("Bookmarks:", profileDetail.bookmarks);
}