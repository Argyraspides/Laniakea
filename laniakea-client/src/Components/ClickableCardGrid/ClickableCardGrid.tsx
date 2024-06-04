import React, { ReactElement } from 'react';
import './ClickableCardGrid.css';

interface Props {
  elements: ReactElement[]; 
}

const ClickableCardGrid: React.FC<Props> = ({ elements }) => {
  return (
    <div className='clickable-card-grid'>
      {elements.map((element, index) => (
        <React.Fragment key={index}>{element}</React.Fragment>
      ))}
    </div>
  );
};

export default ClickableCardGrid