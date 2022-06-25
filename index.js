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
  const br = document.createElement("br");
  const commentBlock = document.createElement("div");
  const commentDiv = document.getElementById("comment-div");

  commentBlock.classList.add("comment-block");

  const form = document.createElement("form");
  form.classList.add("posted-details");
  // form.setAttribute("action", "./action_page.php");
  // form.setAttribute("method", "post");

  // Name section of the form
  const nameLabel = document.createElement("label");
  nameLabel.classList.add("posted-details");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name:";

  const nameInput = document.createElement("input");
  nameInput.classList.add("posted-details");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");

  // email section of the form
  const emailLabel = document.createElement("label");
  emailLabel.classList.add("posted-details");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email:";

  const emailInput = document.createElement("input");
  emailInput.classList.add("posted-details");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("id", "email");

  // comment section of the form
  const commentLabel = document.createElement("label");
  commentLabel.classList.add("posted-details");
  commentLabel.setAttribute("for", "comment");
  commentLabel.textContent = "Comment:";

  const commentInput = document.createElement("input");
  commentInput.classList.add("posted-details");
  commentInput.setAttribute("type", "text");
  commentInput.setAttribute("id", "comment");

  // Submit Button
  const submitButton = document.createElement("input");
  submitButton.classList.add("posted-details");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "comment");
  submitButton.setAttribute("onclick", "postComment()");

  commentDiv.appendChild(commentBlock);
  commentBlock.appendChild(form);
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(br.cloneNode(true));
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(br.cloneNode(true));
  form.appendChild(commentLabel);
  form.appendChild(commentInput);
  form.appendChild(submitButton);
}

function postComment() {
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

