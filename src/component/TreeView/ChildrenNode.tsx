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
      <CarryOutOutlined />
      <span>{name}</span> |<span>{type}</span> |
      <span>
        <DeleteOutlined />
      </span>
    </div>
  );
};

export default ChildNode;
