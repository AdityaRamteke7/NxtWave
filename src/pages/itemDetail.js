import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import './intemDetail.css';

const { Option } = Select;

const ItemDetail = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="item-detail-page">
      <div className="item-detail-box">
        <Form
          name="item-detail-form"
          initialValues={{
            itemTitle: 'iB studio trainees',
            link: 'www.slack.iB studio trainees.com',
            iconUrl: 'www.slack.iB studio trainees.com',
            tagName: 'User',
            category: 'slack',
            description: 'This channel is for iB studio trainees team.',
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h2>Item Details</h2>

          <Form.Item
            label="Item Title"
            name="itemTitle"
            rules={[{ required: true, message: 'Please input the item title!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Link"
            name="link"
            rules={[{ required: true, message: 'Please input the link!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Icon URL"
            name="iconUrl"
            rules={[{ required: true, message: 'Please input the icon URL!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tag Name"
            name="tagName"
            rules={[{ required: true, message: 'Please select the tag name!' }]}
          >
            <Select>
              <Option value="User">User</Option>
              <Option value="Admin">Admin</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: 'Please input the category!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ItemDetail;
