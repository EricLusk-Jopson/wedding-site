export interface Party {
  id: string;
  name: string;
  max: number;
  size: number;
  email: string;
  token: string;
  notes?: string;
  confirmed?: boolean;
}
