import axios, { AxiosResponse } from "axios";
import { GenericResponse } from "../interfaces/interface";

/**
 * response data api bff
 */
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