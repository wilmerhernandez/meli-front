import config from "../assets/resources/configmaps/config";
import httpService from "./httpService";
//import mockSearch from "../mock/mockSearch";
/**
 * return search of product
 * for mock data 
 * const response = mockSearch
 * @param q 
 * @returns GenericResponse
 */
// @ts-ignore
export const search = async (q: string) => {
  //const response = mockSearch;
  const response = await httpService.execute(config['dev'].meli.domain+config['dev'].port,config['dev'].meli.paths.search+q);
  return response;
};

const exportObject = {
  search,
};

export default exportObject;
