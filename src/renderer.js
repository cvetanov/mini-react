const renderer = (...args) => {
  console.log(args);
  return document.createElement(args[0]);
};

export {
  renderer
};
