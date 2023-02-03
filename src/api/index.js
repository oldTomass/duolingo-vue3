// 公共请求方法

import axios from "axios";
import base from "./base";

const api = {
  /**
   * 首页
   */
  getHome() {
    return axios.get(base.home);
  },
  getLogin(params) {
    return axios.post(base.login , {params});
  },
  /**
   * 查询errors/uid
   */
  getErrors(params) {
    return axios.get(base.errors, { params });
  },
  /**
   * 查询第一页的句子/sentence/{contentType}/{contentLevel}/{page}
   */
  getSentenceByPage(contentType, contentLevel, page) {
    return axios.get(
      base.sentences + "/" + contentType + "/" + contentLevel + "/" + page
    );
  },
};
export default api;
