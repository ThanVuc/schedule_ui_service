// Thông tin đăng nhập
export interface LoginCredentials {
  email: string;
  password: string;
}

// Dữ liệu khi đăng ký
export interface RegisterData {
  email: string;
  password: string;
  userName?: string;
  fullName?: string;
}

// Thông tin người dùng trả về sau khi đăng nhập
export interface User {
  id: string;
  email: string;
  fullName?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Phản hồi từ API đăng nhập
export interface LoginResponse {
  token: string;
  refreshToken?: string;
  user: User;
}

// Phản hồi từ API đăng ký (nếu khác login)
export interface RegisterResponse {
  message: string;
  user: User;
}
