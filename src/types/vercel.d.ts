export interface VercelRequest {
  body?: any;
  method?: string;
  query?: Record<string, string>;
  headers?: Record<string, string>;
}

export interface VercelResponse {
  status: (code: number) => VercelResponse;
  json: (data: any) => void;
  send?: (data: any) => void;
}
