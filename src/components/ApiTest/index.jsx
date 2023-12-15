
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;


// `https://developer.nps.gov/api/v1/passportstamplocations?parkCode=DRTO&stateCode=FL`
export default function ApiTest() {
 
  // fetch(`https://developer.nps.gov/api/v1/parks?lparkCode=&stateCode=&limit=100&api_key=${apiKey}`)
  // fetch(`https://developer.nps.gov/api/v1/passportstamplocations?&api_key=${apiKey}`)
    
  fetch(`https://developer.nps.gov/api/v1/visitorcenters?parkCode=&stateCode=nv,az&limit=10&api_key=${apiKey}`)
    .then(response => {
    return response.json()
    }).then(data => {
    console.log(data)
  })
  return (
    <h1> bloop </h1>
  )
}

// brings up this error:  Uncaught ReferenceError: process is not defined

