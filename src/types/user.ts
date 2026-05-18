export interface User {
  id: number;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface StoredUser extends User {
  password: string;
}
