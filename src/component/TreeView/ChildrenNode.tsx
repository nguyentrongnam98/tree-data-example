import React from 'react';
import { CarryOutOutlined, DeleteOutlined } from '@ant-design/icons';

import './style.css';

interface ChildNodeProps {
  name: string;
  type: string;
}

const ChildNode: React.FC<ChildNodeProps> = (props) => {
  const { name, type } = props;

  return (
    <div className='node'>
      <CarryOutOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
      <span>{name}</span> |<span>{type}</span> |
      <span>
        <DeleteOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
      </span>
    </div>
  );
};

export default ChildNode;
