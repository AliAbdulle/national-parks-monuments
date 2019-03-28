const listNationalParks = () => {
    getAllParks().then(parksArray => {
      console.log("parksArray", parksArray)
      let nationParksFragment = document.createDocumentFragment();
     parksArray.forEach(park => {
        let parkHtml = buildParkHtml(park);
        nationParksFragment.appendChild(parkHtml);
      });
      const nationalParksSection = document.querySelector("#national--parks");
      clearElement(nationalParksSection)
      nationalParksSection.appendChild(nationParksFragment)
    });
  };

  //listMomumment
  const listNationalMonuments = () => {
    getAllMonuments().then(monumentsArray => {
      console.log("monumenysArray", monumentsArray)
      let monumentsFragment = document.createDocumentFragment();

      monumentsArray.forEach(monument => {
        let monumentHtml = buildMonumentkHtml(monument);
        monumentsFragment.appendChild(monumentHtml);
      });

      const monumentSection = document.querySelector("#national--monuments");
      clearElement(monumentSection)
      monumentSection.appendChild(monumentsFragment)
    });
  };