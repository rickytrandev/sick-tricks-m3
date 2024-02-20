
export function fetchTricks() {
  return fetch("http://localhost:3001/api/v1/tricks")
    .then(res => {
      if (!res.ok) {
        console.log(res.status)
        throw new Error(res.status)
      }
      return res.json()
    })
    .catch(err => {
      console.log(err);
    })
}

export function postTrick(newTrick) {
  return fetch("http://localhost:3001/api/v1/tricks	", {
    method: 'POST', 
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify(newTrick)
  })
}

export function deleteTrick(id) {
  return fetch(`http://localhost:3001/api/v1/tricks/${id}`, {
    method: 'DELETE'
  })
}