import React from 'react';
import Switch from './switch';

export default { title: 'Sliding Switch' };

export const _design = () => <Switch optionItems={[{ label: 'DESIGN', selected: true }, { label: 'DEBUG', selected: false }]} />;

export const _debug = () => <Switch optionItems={[{ label: 'DESIGN', selected: false }, { label: 'DEBUG', selected: true }]} />;

export const _error = () => <Switch optionItems={[{ label: 'DESIGN', selected: true }, { label: 'DEBUG', selected: false }]} error="This is an error message" />;
