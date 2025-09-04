const comments = [
  {
    name: "Kayblis",
    comment: "I'm the herald of darkness",
    time: "Thu Jan 12 2025",
  },
  {
    name: "Murasame",
    comment: "余はなかなか強いぞ！114514",
    time: "Thu Jan 11 2025",
  },
];
const commentsBox = document.querySelector("#comments");
let nameInput = document.querySelector("#name");
let commentInput = document.querySelector("#comment");
const btnSubmit = document.querySelector("#btn-submit");
const btnClose = document.querySelector(".btn-close");
const renderComments = function (comments) {
  commentsBox.innerHTML = "";
  comments.forEach((item) => {
    commentsBox.insertAdjacentHTML(
      "beforeend",
      `<hr />
          <h4>
            <span>${item.name}</span>
            <span class="date">${item.time}</span>
          </h4>
          <p>${item.comment}</p>`
    );
  });
};

renderComments(comments);

btnSubmit.onclick = function () {
  let nameStr = nameInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
  let commentStr = commentInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
  if (!nameStr || !commentStr) return alert("Please type something due");
  comments.unshift({
    name: nameStr,
    comment: commentStr,
    time: new Date(),
  });
  renderComments(comments);
};

let isClosed = false;
btnClose.onclick = function () {
  if (!isClosed) {
    btnClose.textContent = "开启留言";
  } else {
    btnClose.textContent = "关闭留言";
  }
  nameInput.disabled = !nameInput.disabled;
  commentInput.disabled = !commentInput.disabled;
  btnSubmit.disabled = !btnSubmit.disabled;
  isClosed = !isClosed;
};
