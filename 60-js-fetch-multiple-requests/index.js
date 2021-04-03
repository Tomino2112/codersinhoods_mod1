const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================

/**
 * 
 * REQUIREMENTS:
 * 
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */
const fetchData = (url) => {
  const mainResult = fetch(url)
  .then((response) => response.json())
  
  return mainResult
 
 
}

const setNameValues= () => fetchData(houseURL).then((results)=> {
  swornMembers = results.swornMembers;
  swornMembers.forEach(member => { fetchData(member).then((memberData)=>
    {
      members.push({name: `${memberData.name}`,url: `${memberData.url}`})
      const resultLi = document.createElement('li');
      // resultLi.title = member.name;
      resultLi.innerHTML = `<p class="name">${memberData.name}</p>`;
      resultEl.appendChild(resultLi);
    })
    
  });
  // console.log(members)
}

);

setNameValues();


const getName = (searchInput) =>{
  const searchedNames =[];
  const searchedUrls = [];
  // console.log(names);
  members.forEach(member =>{
    const nameValue = member.name.toLowerCase();
    if (nameValue.includes(searchInput)){
      
        searchedNames.push(member.name);
        searchedUrls.push(member.url)
        
    }
  })
console.log(searchedNames,searchedUrls)

resultEl.innerHTML ='';
searchedUrls.forEach( (urlSearched) => { fetchData(urlSearched).then((urlData)=>
    {
      console.log(urlData);
      const resultLi = document.createElement('li');
      resultLi.innerHTML = `<p class="name">${urlData.name}</p>
      <p class="life">Born: ${urlData.born} - Died: ${urlData.died}</p>
      <p class="gender"><strong>Gender: </strong>${urlData.gender}</p>
      <p class="culture"><strong>Culture: </strong>${urlData.culture}</p>`
      resultEl.appendChild(resultLi);
    })
    
  });
}

document.querySelector('form').addEventListener('keyup',(event)=>{
  event.preventDefault();
  getName(searchEl.value);

})

 /** 
  * HTML for each member: 
  * <li>
  *     <p class="name">Bilbo Baggins</p>
  *     <p class="life">1777 – 1888</p>
  *     <p class="gender"><strong>Gender: </strong>Male</p>
  *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
  * </li>
  * 
  * 
  * 
  * 
  * resultLi.innerHTML = `<p class="name">${memberData.name}</p>
        <p class="life">1777 – 1888</p>
        <p class="gender"><strong>Gender: </strong>${memberData.gender}</p>
        <p class="culture"><strong>Culture: </strong>${memberData.culture}</p>`
      resultEl.appendChild(resultLi);
 */

