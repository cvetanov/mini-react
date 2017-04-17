import { DemoComponent } from './components/Demo.jsx';
import { WrappedDemoComponent } from './components/WrappedDemo.jsx';

const components = {
  DemoComponent,
  WrappedDemoComponent
};

const getComponentName = transpiledComponent => transpiledComponent.substring(9, transpiledComponent.indexOf('('));

const h = (nodeName, attributes, ...args) => {
  console.log(nodeName, attributes, args);
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
};

const render = node => {

  if(node.split) {
    return document.createTextNode(node);
  }

  // workaround for now
  if (typeof node.nodeName === 'function') {
    return render(components[node.nodeName.name].render());
  }
  const _node = document.createElement(node.nodeName);

  const attributes = node.attributes || {};
  Object.keys(attributes).forEach(key => _node.setAttribute(key, attributes[key]));

  const children = node.children || [];
  children.forEach(c => _node.appendChild(render(c)));

  return _node;
};

export {
  h,
  render
};
