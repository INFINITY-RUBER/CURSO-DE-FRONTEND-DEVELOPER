import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('with text', () => '<button class="btn">😎soy genio😎</button>')
  .add('with emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button;
  });