import config from "../assets/resources/configmaps/config";
import httpService from "./httpService";
//import mockSearch from "../mock/mockSearch";

// @ts-ignore
export const search = async (q: string) => {
  const response = await httpService.execute(config['dev'].meli.domain+config['dev'].port,config['dev'].meli.paths.search+q);
  return response;
};

const exportObject = {
  search,
};

export default exportObject;
