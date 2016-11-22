const getElementFromTemplate = (nodeElement) => {
  let node = document.createElement('span');
  node.innerHTML = nodeElement;
  return node;
};

export default getElementFromTemplate;
