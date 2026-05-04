export interface OrderForm {
  name: string;
  phone: string;
  address: string;
  comment?: string;
}

export interface OrderErrors {
  name?: string;
  phone?: string;
  address?: string;
}
