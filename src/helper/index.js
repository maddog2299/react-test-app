
const normalizeValues = (inputData = "") => {
	let normalized = {}, sourceArray = [];
  if (inputData.length) {
    sourceArray = inputData.toLowerCase().split(" ");
    sourceArray.forEach((el, index) => {
      const srcObj = normalized[el];
      if (srcObj) {
        const allLinks = srcObj.links;
        allLinks.push(el+index);
        normalized[el+index] = {value: el};
        srcObj.sizeCoef = (allLinks.length + 1) * 1.5;
        allLinks.forEach(link => {
          normalized[link].sizeCoef = srcObj.sizeCoef;
        })
      } else {
        normalized[el] = {value: el, links: []};
      }
    });
    sourceArray = Object.values(normalized).sort((a, b) => {
      return a.value.length - b.value.length || a.value.localeCompare(b.value)
    });
  }
	return sourceArray;
};

export {
	normalizeValues
};
