export const APIConfig = {
  clientLogin: "/client/login",
  createNewSite: "/site",
  createNewQuery: "/user-query",
  getAllQueries: "/user-query",
  getClientQueries: "/user-query/client/",
  getSiteById: "/site/",
  getSiteByClient: "/site/client/",
  getAllSites: "/site",
  masterConcerns: "/master-concerns",
  siteTypes: "/site/site-types",
  clientOccupations: "/client/occupations",
  createClient: "/client",
  postForm: "/advice",
  getForms: "advice/{query-id}/{site-id}/{level}",
};

export default APIConfig;
