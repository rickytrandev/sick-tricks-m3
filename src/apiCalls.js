
export function fetchTricks() {
  return fetch("http://localhost:3001/api/v1/tricks")
    .then(res => {
      if (!res) {
        console.log(res.status)
        throw new Error(res.status)
      }
      return res.json()
    })
    .catch(err => {
      console.log(err);
    })
}

