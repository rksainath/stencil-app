import { Component, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString();

    return (
      <div>
        <p>Today's date: {date}</p>
        <p>Current time: {time}</p>
      </div>
    );
  }
}
