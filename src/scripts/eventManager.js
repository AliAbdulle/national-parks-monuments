const handleParkDelete = () => {
    console.log(
      "delete button clicked",
      event.target.parentNode.id.split("--")[1]
    );
    let parkId = event.target.parentNode.id.split("--")[1];

    deletePark(parkId).then(() => listNationalParks());
  };

  const handleVisited = () => {
    console.log(
      "visited button clicked",
      event.target.parentNode.id.split("--")[1]
    );
    let parkId = event.target.parentNode.id.split("--")[1];

    let visitedParkObject = {
      visited: true
    };

    patchPark(parkId, visitedParkObject).then(() => listNationalParks());
  };

  const handleEdit = () => {
    console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
    let parkId = event.target.parentNode.id.split("--")[1];

    const parkArticle = document.querySelector(`#national-park--${parkId}`);
    clearElement(parkArticle);

    getPark(parkId).then(parkToEdit => {
      const editFormForPark = parkEditForm(parkToEdit);
      parkArticle.appendChild(editFormForPark);
    });
  };

  const handleUpdate = () => {
    console.log(
      "update button clicked",
      event.target.parentNode.id.split("--")[1]
    );
    let parkId = event.target.parentNode.id.split("--")[1];

    const editedParkName = document.querySelector(`#edit-park-name--${parkId}`);
    const editedParkState = document.querySelector(`#edit-park-state--${parkId}`);
    const editedParkLatitude = document.querySelector(`#edit-park-latitude--${parkId}`);
    const editedParkLongitude = document.querySelector(`#edit-park-longitude--${parkId}`);
    const editedParkVisited = document.querySelector(`#edit-park-visited--${parkId}`);

    console.log(editedParkName.value, editedParkState.value, editedParkLatitude.value, editedParkLongitude.value);

    let editedPark = {
      name: editedParkName.value,
      state: editedParkState.value,
      latitude: editedParkLatitude.value,
      longitude: editedParkLongitude.value,
      visited:boolean(editedParkVisited)
    };

    putPark(parkId, editedPark).then(() => listNationalParks());
  };

  // Monuments EventManager
  const handleMonumentDelete = () => {
    console.log(
      "delete button clicked",
      event.target.parentNode.id.split("--")[1]
    );
    let monumentId = event.target.parentNode.id.split("--")[1];

    deleteMonuments(monumentId).then(() => listNationalMonuments());
  };

  const handleMonumentVisited = () => {
    console.log(
      "visited button clicked",
      event.target.parentNode.id.split("--")[1]
    );
    let monumentId = event.target.parentNode.id.split("--")[1];

    let visitedMonumentObject = {
      visited: true
    };

    patchMonuments(monumentId, visitedMonumentObject).then(() => listNationalMonuments());
  };

  const handleMonumentEdit = () => {
    console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
    let monumentId = event.target.parentNode.id.split("--")[1];

    const monumentArticle = document.querySelector(`#national-monument--${monumentId}`);
    clearElement(monumentArticle);

    getMonument(monumentId).then(monumentToEdit => {
      const editFormForMonument = monumentEditForm(monumentToEdit);
    clearElement(monumentArticle);
    parkArticle.appendChild(editFormForMonument);
    });
  };

  const handleMonumentUpdate = () => {
    console.log(
      "update button clicked",
      event.target.parentNode.id.split("--")[1]
    );
    let monumentId = event.target.parentNode.id.split("--")[1];

    const editedMonumentName = document.querySelector(`#edit-monument-name--${monumentId}`);
    const editedMonumentState = document.querySelector(`#edit-monument-state--${monumentId}`);
    const editedMonumentLatitude = document.querySelector(`#edit-monument-latitude--${monumentId}`);
    const editedMonumentLongitude = document.querySelector(`#edit-monument-longitude--${monumentId}`);
    const editedMonumentVisited = document.querySelector(`#edit-monument-visited--${monumentId}`);

    console.log(editedMonumentName.value, editedMonumentState.value, editedMonumentLatitude.value, editedMonumentLongitude.value, editedMonumentVisited.visited);

    let editedMonument = {
      name: editedMonumentName.value,
      state: editedMonumentState.value,
      latitude: editedMonumentLatitude.value,
      longitude: editedMonumentLongitude.value,
      visited:boolean(editedMonumentVisited)
    };
    putMonument(monumentId, editedMonument).then(() => listNationalMonuments());
  };