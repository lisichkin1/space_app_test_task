import React from 'react';
import { IconUIProps } from '../../types/typesUI';

export const IconUI: React.FC<IconUIProps> = ({ className, url, width, height }) => {
  return (
    <div className={className}>
      <img src={url} alt="За стеклом" width={width} height={height} />
    </div>
  );
};
