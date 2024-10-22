import React, { useEffect, useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

import { Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';
import ParentNode from './ParentNode';
import ChildNode from './ChildrenNode';

const TreeView: React.FC = () => {
  const [data, setData] = useState<DataNode[]>([]);
  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  const hadleAddChild = () => {
    console.log('add child');
  };

  const handleDelete = () => {
    console.log('delete');
  };

  const handleAddNode = () => {
    const newNode = {
      title: (
        <ParentNode
          name='parent 3'
          type='type 3'
          subtype='subtype 3'
          onAddChild={hadleAddChild}
          onDelete={handleDelete}
        />
      ),
      key: `0-${data.length}}`,
    };

    setData((prev) => [
      ...prev.slice(0, prev.length - 1),
      newNode,
      prev[prev.length - 1],
    ]);
  };

  const treeData: DataNode[] = [
    {
      title: (
        <ParentNode
          name='parent 1'
          type='type 1'
          subtype='subtype 1'
          onAddChild={hadleAddChild}
          onDelete={handleDelete}
        />
      ),
      key: '0-0',

      children: [
        {
          title: <ChildNode name='child 1' type='type 1' />,
          key: '0-0-0',
        },
        {
          title: <ChildNode name='child 2' type='type 2' />,
          key: '0-0-1',
        },
        {
          title: <ChildNode name='child 3' type='type 3' />,
          key: '0-0-2',
        },
      ],
    },
    {
      title: (
        <ParentNode
          name='parent 2'
          type='type 2'
          subtype='subtype 2'
          onAddChild={hadleAddChild}
          onDelete={handleDelete}
        />
      ),
      key: '0-1',
      children: [
        {
          title: <ChildNode name='child 4' type='type 4' />,
          key: '0-0-4',
        },
      ],
    },
    {
      title: (
        <PlusCircleOutlined
          style={{ fontSize: '24px' }}
          onClick={handleAddNode}
        />
      ),
      key: 'add-node',
    },
  ];

  useEffect(() => {
    setData(treeData);
  }, []);

  return (
    <div>
      <Tree
        showLine={true}
        showIcon={true}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={data}
      />
    </div>
  );
};

export default TreeView;
