import { Form, Input, Button, Card, Typography } from 'antd';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({ name: '', description: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const onChange = e => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {

    setSubmittedData(data);
    setData({ name: '', description: '' }); 
  };

  return (
    <div style={{ padding: '50px' }}>
      <Typography.Title>Simple Form</Typography.Title>

      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Name">
          <Input
            name="name" 
            value={data.name}
            onChange={onChange}
            placeholder="Enter your name"
          />
        </Form.Item>

        <Form.Item label="Description">
          <Input
            name="description" 
            value={data.description}
            onChange={onChange}
            placeholder="Enter description"
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      {submittedData && (
        <Card style={{ marginTop: '20px' }}>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Description:</strong> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
}

export default App;
