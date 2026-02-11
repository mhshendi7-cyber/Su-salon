
export type UserRole = 'client' | 'expert';
export type Gender = 'male' | 'female';
export type RequestStatus = 'pending' | 'accepted' | 'completed' | 'cancelled';

export interface User {
  id: string;
  name: string;
  phone: string;
  role: UserRole;
  gender: Gender;
  avatar?: string;
  isVerified: boolean;
  walletBalance: number;
  suPoints: number;
}

export interface Service {
  id: string;
  name: string;
  price: number;
}

export interface Expert {
  id: string;
  name: string;
  gender: Gender;
  bio: string;
  rating: number;
  reviewCount: number;
  skills: string[];
  avatar: string;
  gallery: string[];
  services: Service[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}

export interface ServiceRequest {
  id: string;
  clientId: string;
  expertId: string;
  expertName: string;
  serviceName: string;
  price: number;
  status: RequestStatus;
  date: string;
  time: string;
}
