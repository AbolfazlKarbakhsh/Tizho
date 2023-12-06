import React from 'react';
import { DeleteOutlined, DollarOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const ManagePakageBoxIcon = () => (
  <Card
    style={{
      width: 130,
      padding: '0px',
      margin: '0px',
      background:'#F3F1EF'
    }}
    actions={[
      <DeleteOutlined key="delete" style={{fontSize:'1.7rem'}}/>,
      <EditOutlined key="delete" style={{fontSize:'1.7rem'}}/>,
    ]}
    className='card-all m-2 m-md-4'
    
  >
    <div className='p-0 m-0 Fvazir   d-flex centerAll flex-column'>
      <DollarOutlined  style={{background:'#F3F1EF'}}/>
      <div className='font7 my-2'>
        $100,000
      </div>
    </div>
  </Card>
);
export default ManagePakageBoxIcon;
