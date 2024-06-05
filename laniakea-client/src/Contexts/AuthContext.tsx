import React, { createContext, useReducer, useEffect, ReactNode } from 'react';

// Context holds the token and username only
interface AuthContextProps {
  token: string;
  username: string;
  dispatch: React.Dispatch<any>;
}

const defaultAuthContextProps: AuthContextProps = {
  token: '',
  username: '',
  dispatch: () => null,
};

export const AuthContext = createContext<AuthContextProps>(defaultAuthContextProps);

type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthState = {
  token: string;
  username: string;
};

type AuthAction = 
  | { type: 'LOGIN'; token: string; username: string }
  | { type: 'LOGOUT' };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { token: action.token, username: action.username };
    case 'LOGOUT':
      return { token: '', username: '' };
    default:
      return state;
  }
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { token: '', username: '' });

  useEffect(() => {
    try {
      const user = localStorage.getItem('laniakea_site_username');
      const token = localStorage.getItem('laniakea_site_token');
      if (user && token) {
        dispatch({ type: 'LOGIN', token: token, username: user });
      } else {
        dispatch({ type: 'LOGOUT' });
      }
    } catch (error) {
      console.error('Error parsing localStorage data', error);
    }
  }, []);

  console.log('AuthContext state: ', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
