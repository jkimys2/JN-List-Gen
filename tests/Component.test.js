const Component = require('../lib/component')

describe('Component', () => {
    describe('Instance', () => {
      it('should create an instance of the Component class', () => {
        const component = new Component();
  
        expect(component).toBeInstanceOf(Component);
      });
  
      it('should take in children as an array', () => {
        const children = ['Hello', 'World!'];
        const component = new Component(children);
  
        expect(component.children).toEqual(children);
      });
  
      it('should default children to an empty array if none are provided', () => {
        const component = new Component();
  
        expect(component.children).toEqual([]);
      });
    });
  });