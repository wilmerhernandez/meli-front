import config from "../assets/resources/configmaps/config";
import httpService from "./httpService";
//import mockDetails from "../mock/mockDetails";
/**
 * app return data of details product by id
 * const response = mockDetails
 * @param q 
 * @returns GenericResponse
 */
export const detailService = async (q: string) => {
  //const response = mockDetails;
  const response = await httpService.execute(config['dev'].meli.domain+config['dev'].port,config['dev'].meli.paths.items+q);
  return response;
};

const exportObject = {
  detailService,
};

export default exportObject;
