export interface ToasterRequest {
  type: {
    error: string;
    info: string;
    success: string;
    warning: string;
  };
  message: string;
}
