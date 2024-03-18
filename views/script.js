const btn = document.getElementByid('submit')
const username = document.getElementById('username')
const firstname = document.getElementById('firstname')
const postbox = document.querySelector('ul')
const textarea = document.querySelector('textarea')



function postComment() {

  const newComment = document.createElement('li');
  postbox.appendChild(newComment)

  const comment = 
  ` <div class='comment'>
  <h3>${firstname.value}</h3><em>${username.value}</em>
  <p>${textarea.value}</p>
  </div>`

 
  newComment.innerHTML = comment
  postbox.innerHTML =  newComment
  
}
postComment()
btn.addEventListener('click', postComment())