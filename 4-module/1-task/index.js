function makeFriendsList(friends) {
  friend = document.createElement("ul");
  friends.forEach((item) => {
    friend.innerHTML += `<li> ${item.firstName} ${item.lastName}</li>`;
  });
  return friend;
}
