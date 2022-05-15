import axios, { AxiosResponse } from "axios";

export default class httpService {
  public static async execute(endPoint: string, path: string): Promise<GenericResponse> {
    const url = `${endPoint}/${path}`;

    try {
      const { data }: AxiosResponse<GenericResponse> = await axios.get(url);

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}


export interface Author {
  name: string;
  lastname: string;
}


export interface Item {
  id: string;
  title: string;
  price: Price;
  picture?: string;
  condition?: string;
  free_shipping?: boolean;
  sold_quantity?: number;
  description?: string;
  address?: string;
}


export interface GenericResponse {
  author: Author;
  categories?: string[];
  items?: Item[];
  item?: Item;
}