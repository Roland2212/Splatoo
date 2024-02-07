import { User } from './user.interface';

export interface AuthResponse {
    user: User | null;
    token: string | null;
}
