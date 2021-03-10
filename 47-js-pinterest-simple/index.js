/**
 * Exercise #
 *
 */
 

                                                            //like button
const liked = () =>{
  const likeImg = document.querySelector(".likeBtn>img");

  const likeIt =() => {
    likeImg.src = './img/like_full.png'
   likeImg.className = "liked";
  }
  const unlikeIt =() => {
    likeImg.src = './img/like_empty.png'
   likeImg.className = "notLiked";
  }
  
  if(likeImg.classList.contains('liked')){
    unlikeIt();
    
  } else if (likeImg.classList.contains('notLiked')) {
   likeIt();
  }
}

const likeButton = document.querySelector('.likeBtn')
  likeButton.addEventListener("click", ()=> {
    liked();
  })
                                                              //like button end

                                                              //comment button start


const commentBtn  = document.querySelector('.commentBtn');
const commentNew = document.querySelector('.newComment');
commentBtn.addEventListener("click", ()=>{
  commentNew.classList.toggle("hide");

})

                                                            //comment button end
                                                        
                                                            //comment functionality start

 let commentId = 0;
  const userName ="User12332";
  let commentMessage ="122";

const addComment = () => {
  const commentContent = document.querySelector('textarea').value;
  const commentStructure = document.createElement('div');
  commentStructure.id = (commentId+1);
  commentId = parseInt(commentStructure.id);
  commentStructure.classList.add("comment");
  commentStructure.innerHTML = `
  <em> <h4>${userName}</h4>
  <p>
  ${commentContent}
  </p></em>
  `;
  return commentStructure
} 
                                                            //comment functionality End


                                                    // submit and cancel buttons
const submitBtn = document.querySelector('.submit');
const commentsWrapper = document.querySelector('.commentWrap');
submitBtn.addEventListener('click', (event)=>{
  event.preventDefault();
  const newComment = addComment();
  commentsWrapper.appendChild(newComment);
  document.querySelector('textarea').value = "";
  commentNew.classList.toggle("hide");
})


const cancelBtn = document.querySelector(".cancel");
cancelBtn.addEventListener("click", (event)=>{
  event.preventDefault();
  commentNew.classList.toggle("hide");

})