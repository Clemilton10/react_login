import { Button, Col, Form, Input, Row, Space, message } from 'antd';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const Login = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const onFinish = async (values: { email: string; password: string }) => {
		try {
			await auth.authenticate(values.email, values.password);
			navigate('/');
		} catch (er) {
			message.error('Invalid email or Password');
		}
	};
	return (
		<Row
			justify="center"
			align="middle"
			style={{
				width: '100vw',
				height: '100vh',
				backgroundColor: '#efefef'
			}}
		>
			<Col span={6}>
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					onFinish={onFinish}
				>
					<Form.Item label="Email" name="email">
						<Input suffix={<UserOutlined />} placeholder="User" />
					</Form.Item>
					<Form.Item label="Password" name="password">
						<Input.Password placeholder="Password" />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button
							type="primary"
							htmlType="submit"
							style={{ width: '100%' }}
						>
							Sign in
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	);
};

export default Login;
