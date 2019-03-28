const apiBaseUrl = "http://localhost:8088"

const getAllParks = () => fetch(`${apiBaseUrl}/parks`).then(response => response.json())
const getAllMonuments = () => fetch(`${apiBaseUrl}/monuments`).then(response => response.json())

const deletePark = (parkId) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "DELETE"
})
const deleteMonuments = (monumentsId) => fetch(`${apiBaseUrl}/monuments/${monumentsId}`, {
  method: "DELETE"
})

const patchPark = (parkId, updatedParkObject) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedParkObject)
})

const patchMonuments = (monumentsId, updatedMonumentsObject) => fetch(`${apiBaseUrl}/monuments/${monumentsId}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedMonumentsObject)
})

const getPark = (parkId) => fetch(`${apiBaseUrl}/parks/${parkId}`).then(response => response.json())

const putPark = (parkId, updatedParkObject) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedParkObject)
})

const putMonuments = (monumentsId, updatedMonumentsObject) => fetch(`${apiBaseUrl}/monuments/${monumentsId}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedMonumentsObject)
})