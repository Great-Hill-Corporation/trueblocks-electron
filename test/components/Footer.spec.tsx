import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Footer from '../../src/renderer/components/Footer';

describe('Footer component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Footer value={1} incrementValue={jest.fn()} decrementValue={jest.fn()} resetValue={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
