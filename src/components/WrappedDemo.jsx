import { h } from '../renderer';
import { DemoComponent } from './Demo.jsx';

class WrappedDemoComponent {
  static render() {
    return (
      <div>
        Hello from wrapped demo component
        <DemoComponent />
        Bye from wrapped demo component
      </div>
    );
  }
}

export {
  WrappedDemoComponent
};
