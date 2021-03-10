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
    console.log("clicked");
  })
                                                              //like button end

                                                              // Add Comment Function
  let commentId = 0;
  const userName ="user12332";
  let commentMessage ="122";

  const addComment = () => {
  const newComment = document.querySelector('.newComment');
    
  const newText = document.createElement('form');
  newText.innerHTML= `
  <textarea name="comment" cols="30" rows="10"></textarea>
  <button class="cancel">Cancel</button>
  <button class="submit" type="submit">Submit</button>
  `
    
  newComment.appendChild(newText);

 
  commentMessage = document.querySelector('textarea').value;
  // commentStructure.querySelector('em').innerHTML = commentMessage;
  const commentStructure = document.createElement('div');
  commentStructure.id = commentId;
  commentStructure.classList.add("commentWrap");
  commentStructure.innerHTML = `
    <h4>${userName}</h4>
  <p>
  <em></em>
  </p>
  `;

  

                                               // comment submit Button

  const submit = document.querySelector('.submit');
  const commentSection = document.querySelector('.commentWrap');
  submit.addEventListener("click", (event)=> {
    event.preventDefault();
    commentId = commentId+1;
    console.log(document.querySelector('textarea').value)
    commentSection.appendChild(commentStructure);
    newText.remove();
    commentNew.classList.remove('commentIncoming');
  })
  
  // return commentStructure
  
}

                                                            //Add Comment Function End

                                                            //Comment Button
const commentBtn  = document.querySelector('.commentBtn');
const commentNew = document.querySelector('.newComment')
commentBtn.addEventListener("click", ()=>{
  if(commentNew.classList.contains('commentIncoming')){
    document.querySelector('form').remove();
    commentNew.classList.remove('commentIncoming');
  } else {
    commentNew.classList.add('commentIncoming')
    addComment()
  }

})

// const submit = document.querySelector('.submit');

// submit.addEventListener("click", (event)=>{
//   event.preventDefault();
//   console.log("clickd");
// })

