import React from 'react';
import { showHint } from '../helpers/helpers';

const Hint = ({ selectedWord }) => {
  return <div>{showHint(selectedWord)}</div>;
};

export default Hint;
