const getElementFromTemplate = (nodeElement) => {
  let node = document.createElement('span');
  let trimElement = nodeElement.trim();
  node.innerHTML = trimElement;
  return node;
};

export default getElementFromTemplate;
