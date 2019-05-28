import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';

addDecorator(withInfo);
// addDecorator(withOptions);

function loadStories() {
  const req = require.context('../src/app/components/', true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
