export const APIConfig = {
  clientLogin: "/client/login",
  createNewSite: "/site",
  createNewQuery: "/user-query",
  getAllQueries: "/user-query",
  getClientQueries: "/user-query/client/",
  getSiteById: "/site/",
  getSiteByClient: "/site/client/",
  getQueriesBySite: "/user-query/site/",
  getAllSites: "/site",
  masterConcerns: "/master-concerns",
  siteTypes: "/site/site-types",
  clientOccupations: "/client/occupations",
  createClient: "/client",
  postForm: "/advice",
  getForms: "/advice/",
  uploadFile: "/files/query-pdfs/",
  uploadProfilePic: "/files/profile-pic",
  resolveQuery: "/user-query/resolve-query/",
  generateReport: "/advice/advice-pdf/",
  sendReport: "/advice/send-advice-pdf/query-id",
};

export default APIConfig;
