import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout';
import Login from './components/Login';
import Adm from './components/Adm';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					{/* Rota Privada */}
					<Route
						path="/"
						element={
							<ProtectedLayout>
								<Adm></Adm>
							</ProtectedLayout>
						}
					/>
					{/* Rota Pública */}
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
