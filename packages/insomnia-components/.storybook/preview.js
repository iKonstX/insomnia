import { addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './configs/contexts';
import { withInfo } from '@storybook/addon-info';

addDecorator(withContexts(contexts));
addDecorator(withInfo({ inline: true }));

