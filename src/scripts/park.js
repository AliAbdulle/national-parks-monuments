const buildParkHtml = parkObject => {
    // <article>
    //  <h3>Park Name</h3>
    //  <p>State the park in located in</p>
    // </article>

    const parkArticle = buildElement("article", `national-park--${parkObject.id}`);
    parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
    parkArticle.appendChild(buildElement("p", undefined, parkObject.state));
    parkArticle.appendChild(buildElement("p", undefined, parkObject.latitude));
    parkArticle.appendChild(buildElement("p", undefined, parkObject.longitude));

    if(parkObject.visited !== true) {
      let visitedParkButton = buildElement("button", undefined, "Visited Park")
      parkArticle.appendChild(visitedParkButton);
      visitedParkButton.addEventListener("click", handleVisited)
    }

    let editParkButton = buildElement("button", undefined, "Edit Park")
    parkArticle.appendChild(editParkButton);
    editParkButton.addEventListener("click", handleEdit)

    let deleteParkButton = buildElement("button", undefined, "Delete Park")
    parkArticle.appendChild(deleteParkButton);
    deleteParkButton.addEventListener("click", handleParkDelete)
    return parkArticle;
  };

  const parkEditForm = (parkObject) => {
    let editFormFragment = document.createDocumentFragment()

    editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
    editFormFragment.appendChild(buildElement("input", `edit-park-name--${parkObject.id}`, undefined, parkObject.name))

    editFormFragment.appendChild(buildElement("label", undefined, "State: "))
    editFormFragment.appendChild(buildElement("input", `edit-park-state--${parkObject.id}`, undefined, parkObject.state))

    editFormFragment.appendChild(buildElement("label", undefined, "latitude: "))
    editFormFragment.appendChild(buildElement("input", `edit-park-latitude--${parkObject.id}`, undefined, parkObject.latitude))

    editFormFragment.appendChild(buildElement("label", undefined, "longitude: "))
    editFormFragment.appendChild(buildElement("input", `edit-park-longitude--${parkObject.id}`, undefined, parkObject.longitude))

    const updateParkButton = buildElement("button", undefined, "Update")
    updateParkButton.addEventListener("click", handleUpdate)
    editFormFragment.appendChild(updateParkButton)

    return editFormFragment
  }

  //Monuments BuildHTML
  const buildMonumentkHtml = monumentObject => {
    // <article>
    //  <h3>Park Name</h3>
    //  <p>State the park in located in</p>
    // </article>

    const monumentArticle = buildElement("article", `national-monument--${monumentObject.id}`);
    monumentArticle.appendChild(buildElement("h3", undefined, monumentObject.name));
    monumentArticle.appendChild(buildElement("p", undefined, monumentObject.state));
    monumentArticle.appendChild(buildElement("p", undefined, monumentObject.latitude));
    monumentArticle.appendChild(buildElement("p", undefined, monumentObject.longitude));

    if(monumentObject.visited !== true) {
      let visitedMonumentButton = buildElement("button", undefined, "Visited Monument")
      monumentArticle.appendChild(visitedMonumentButton);
      visitedMonumentButton.addEventListener("click", handleMonumentVisited)
    }

    let editMonumentButton = buildElement("button", undefined, "Edit Monument")
    monumentArticle.appendChild(editMonumentButton);
    editMonumentButton.addEventListener("click", handleMonumentEdit)

    let deleteMonumentButton = buildElement("button", undefined, "Delete Monument")
    monumentArticle.appendChild(deleteMonumentButton);
    deleteMonumentButton.addEventListener("click", handleMonumentDelete)
    return monumentArticle;
  };

  const monumentEditForm = (monumentObject) => {
    let editFormFragment = document.createDocumentFragment()

    editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
    editFormFragment.appendChild(buildElement("input", `edit-monumnet-name--${monumentObject.id}`, undefined, monumentObject.name))

    editFormFragment.appendChild(buildElement("label", undefined, "State: "))
    editFormFragment.appendChild(buildElement("input", `edit-monumnet-state--${monumentObject.id}`, undefined, monumentObject.state))

    editFormFragment.appendChild(buildElement("label", undefined, "latitude: "))
    editFormFragment.appendChild(buildElement("input", `edit-monumnet-latitude--${monumentObject.id}`, undefined, monumentObject.latitude))

    editFormFragment.appendChild(buildElement("label", undefined, "longitude: "))
    editFormFragment.appendChild(buildElement("input", `edit-monumnet-longitude--${monumentObject.id}`, undefined, monumentObject.longitude))


    const updateMonumentButton = buildElement("button", undefined, "Update")
    updateMonumentButton.addEventListener("click", handleUpdate)
    editFormFragment.appendChild(updateMonumentButton)

    return editFormFragment
  }
