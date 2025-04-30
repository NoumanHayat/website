// Contact form related types
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
