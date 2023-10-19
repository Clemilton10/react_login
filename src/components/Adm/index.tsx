import { Button, Col, Row } from 'antd';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

const Adm = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const logout = () => {
		auth.logout();
		navigate('/login');
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
			<Col span={12}>
				<h2>ADM</h2>
				<Button type="primary" onClick={logout}>
					Logout
				</Button>
			</Col>
		</Row>
	);
};
export default Adm;
