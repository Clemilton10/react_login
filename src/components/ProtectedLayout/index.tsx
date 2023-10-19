//import React from 'react';
import { Button, Col, Row } from 'antd';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
	const navigate = useNavigate();
	const goLogin = () => {
		navigate('/login');
	};
	const auth = useAuth();
	if (!auth.email) {
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
				<Col span={12}>
					<h1>You don't have access</h1>
					<Button type="primary" onClick={goLogin}>
						Login
					</Button>
				</Col>
			</Row>
		);
	} else {
		return children;
	}
};
