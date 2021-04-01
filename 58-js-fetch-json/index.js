const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */
const fetchData = async (url = 'https://cat-fact.herokuapp.com/facts') =>{
  const allData = await fetch(url)
  .then((response) => response.json())
  // console.log("alldata:",allData)
  // const allFacts =  allData.map(factInfo =>  factInfo.text );
  const allFacts = (Array.isArray(allData) ? allData : allData.all).map(factInfo => factInfo.text );
  
  return allFacts
}

const getThree = async() =>{
  const onlyFacts = await fetchData('https://cat-fact.herokuapp.com/facts');
  const threeFacts = [];

  while (threeFacts.length < 3){
    
    const item = onlyFacts[Math.floor(Math.random()*onlyFacts.length)];
    if(!threeFacts.includes(item)){
      threeFacts.push(item);
    }
    
  }

  threeFacts.forEach(fact  => {
    const newFact = document.createElement('li');
    newFact.innerText = fact;
    result.appendChild(newFact);
  });
}

button.addEventListener('click', () => {

  getThree();
   



})

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */
