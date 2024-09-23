export enum FormFieldType {
  INPUT = 'input',
}

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export interface ApiResponse {
  status: string;
  message: string;
}

export interface AuthResponse extends ApiResponse {
  result: AuthResult;
}

interface AuthResult {
  accessToken: string;
  refreshToken: string;
  exp: string;
  decodeToken: DecodeToken;
}

interface DecodeToken {
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  iss: string;
  aud: string;
  iat: number;
  exp: number;
  sub: string;
  sid: string;
}

export interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  fullName: string;
  avatar: string;
  phone: string | null;
  dob: Date | null;
  uid: string;
  gender: Gender | null;
  role: Role;
  deletedAt: Date | null;
  manually?: boolean;
  affiliate?: string;
}

export interface GetCurrentResponse extends ApiResponse {
  result: IUser;
}
