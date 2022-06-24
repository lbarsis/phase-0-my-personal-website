function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function addComment() {
  const commentBlock = document.createElement("div");
  const commentDiv = document.getElementById("comment-div");

  commentBlock.classList.add("comment-block");

  const postedName = document.createElement("p");
  postedName.classList.add("posted-details");
  postedName.setAttribute("id", "posted-details-name");
  postedName.innerHTML = `<i>Name: </i>...`;

  const postedTimeStamp = document.createElement("p");
  postedTimeStamp.classList.add("posted-details");
  postedTimeStamp.setAttribute("id", "posted-details-timestamp");
  postedTimeStamp.textContent = timeStamp();

  const postedDescription = document.createElement("p");
  postedDescription.classList.add("posted-details");
  postedDescription.setAttribute("id", "posted-details-description");
  postedDescription.innerHTML = `Description: `;

  commentDiv.appendChild(commentBlock);
  commentBlock.appendChild(postedName);
  commentBlock.appendChild(postedTimeStamp);
  commentBlock.appendChild(postedDescription);
}

function timeStamp() {
  let current = new Date();
  let cDate = (current.getMonth() + 1) + '/' + current.getDate() + '/' + current.getFullYear();
  let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  let dateTime = cDate + ' | ' + cTime;
  return dateTime;
}

