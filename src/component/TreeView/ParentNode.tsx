import React from 'react';
import {
  CarryOutOutlined,
  PlusCircleFilled,
  DeleteOutlined,
} from '@ant-design/icons';
import { Tag } from 'antd';
import './style.css';

interface ParentNodeProps {
  name: string;
  type: string;
  subtype: string;
  onAddChild: () => void;
  onDelete: () => void;
}

const ParentNode: React.FC<ParentNodeProps> = (props) => {
  const { name, type, subtype, onAddChild, onDelete } = props;

  return (
    <div className='node'>
      <CarryOutOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
      <span>{name}</span> |<span>{type}</span> |
      <Tag color='orange'>{subtype}</Tag>|
      <span>
        <PlusCircleFilled onClick={() => onAddChild()} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
      </span>{' '}
      |
      <span>
        <DeleteOutlined onClick={() => onDelete()} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
      </span>
    </div>
  );
};

export default ParentNode;
