const env = "local";
export const apiUrl =
  env === "local"
    ? "http://localhost:8080/"
    : env === "prod" && "http://localhost:8080/";
