import axios, { AxiosRequestConfig } from 'axios';

type FetchOptions = {
  config?: AxiosRequestConfig;
};

export const fetchData = async <T>(url: string, options?: FetchOptions): Promise<T[]> => {
  try {
    const response = await axios.get<T[]>(url, options?.config);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return [];
  }
};
