export interface VercelRequest {
  body?: T;
  method?: string;
  query?: Record<string, string>;
  headers?: Record<string, string>;
}

export interface VercelResponse {
  status: (code: number) => VercelResponse;
  json: (data: T) => void;
  send?: (data: T) => void;
}
