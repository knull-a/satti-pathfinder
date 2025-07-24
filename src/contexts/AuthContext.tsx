import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'teenager' | 'employer' | 'mentor' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  profile?: {
    age?: number;
    city?: string;
    school?: string;
    interests?: string[];
    skills?: string[];
    company?: string;
    position?: string;
    experience?: string;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'alex@student.com',
    name: 'Саят Оразкуловандр Петров',
    role: 'teenager',
    profile: {
      age: 16,
      city: 'Астана',
      school: 'Лицей №1',
      interests: ['программирование', 'дизайн', 'игры'],
      skills: ['JavaScript', 'Python', 'Figma']
    }
  },
  {
    id: '2',
    email: 'company@tech.com',
    name: 'ООО "ТехСтарт"',
    role: 'employer',
    profile: {
      company: 'ТехСтарт',
      position: 'HR Менеджер',
      experience: 'IT-стартап, разработка мобильных приложений'
    }
  },
  {
    id: '3',
    email: 'mentor@expert.com',
    name: 'Мария Иванова',
    role: 'mentor',
    profile: {
      company: 'Яндекс',
      position: 'Senior Developer',
      experience: '8 лет в разработке, ментор для молодых специалистов'
    }
  },
  {
    id: '4',
    email: 'admin@sattilink.com',
    name: 'Администратор',
    role: 'admin'
  }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(u => u.email === email && u.role === role);
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('mockUser', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (email: string, password: string, name: string, role: UserRole): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role,
      profile: role === 'teenager' ? { interests: [], skills: [] } : {}
    };
    
    setUser(newUser);
    localStorage.setItem('mockUser', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mockUser');
  };

  // Check for stored user on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('mockUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('mockUser');
      }
    }
  }, []);

  const value = {
    user,
    login,
    register,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};