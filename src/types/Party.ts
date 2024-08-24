export interface Party {
  id: string;
  name: string;
  size: number;
  email: string;
  token: string;
  notes?: string;
  confirmed?: boolean;
}
