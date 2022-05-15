import config from "../assets/resources/configmaps/config";
import httpService from "./httpService";
//import mockDetails from "../mock/mockDetails";

export const detailService = async (q: string) => {
  const response = await httpService.execute(config['dev'].meli.domain+config['dev'].port,config['dev'].meli.paths.items+q);
  return response;
};

const exportObject = {
  detailService,
};

export default exportObject;
