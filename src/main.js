import { render } from './renderer';
import { WrappedDemoComponent } from './components/WrappedDemo.jsx';

const content = render(WrappedDemoComponent.render());

document.getElementById('first').appendChild(content);