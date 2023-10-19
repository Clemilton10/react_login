import react, { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IContext, IUser } from './types';
import {
	LoginRequest,
	getUserLocalStorage,
	setUserLocalStorage
} from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [user, setUser] = useState<IUser | null>();
	const authenticate = async (email: string, password: string) => {
		const response = await LoginRequest(email, password);
		const payload = { token: response.token, email };
		setUser(payload);
		setUserLocalStorage(payload);
	};
	const logout = () => {
		setUser(null);
		setUserLocalStorage(null);
	};

	useEffect(() => {
		const user = getUserLocalStorage();
		if (user) {
			setUser(user);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ ...user, authenticate, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
