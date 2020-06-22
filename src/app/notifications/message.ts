export interface Message {
  id: number;
  type: 'success' | 'error' | 'clear';
  text?: string;
}
