
export type ApiResponse<T> = {
  data: T;
  message?: string;
  success: boolean;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type SelectOption = {
  label: string;
  value: string;
};

export type Status = "idle" | "loading" | "success" | "error";
