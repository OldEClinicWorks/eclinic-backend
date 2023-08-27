export const GET = "get";
export const POST = "post";
export const API = "api"; // uri prefix for makeApiUrl

export const Route = {
  get(url: String, callback: any, middleware: any = null): ApiObject {
    return {
      middleware: middleware,
      method: GET,
      route: url,
      callback: callback,
    };
  },
  post(url: String, callback: any, middleware: any = null): ApiObject {
    return {
      middleware: middleware,
      method: GET,
      route: url,
      callback: callback,
    };
  },
};

export function printRoutes(app: any, route = "", stack: any[] = []) {
  if (app.route) {
    app._router.stack.forEach((middleware: any) => {
      if (middleware.route) {
        stack.push(`${route}${getRoutePath(middleware.route)}`);
      } else if (middleware.name === "router") {
        printRoutes(
          middleware.handle,
          `${route} ${getRoutePath(middleware)}`,
          stack
        );
      }
    });
  }
  return stack;
}

function getRoutePath(route: any) {
  return route.path || "";
}

export function removeAllLeadingSlashes(inputString: String): String {
  let startIndex = 0;
  while (startIndex < inputString.length && inputString[startIndex] === "/") {
    startIndex++;
  }

  return inputString.substring(startIndex);
}


export function assignApiRoutes(
  app: any,
  router: any,
  api_routes: ApiObject[]
) {
  api_routes.forEach((api: ApiObject) => {
    if (api.method === GET) {
      app.get(formatApiUrl(api.route), api.callback);
    }
    if (api.method === POST) {
      app.post(formatApiUrl(api.route), api.callback);
    }
    if (api.middleware) {
      if (Array.isArray(api.middleware)) {
        api.middleware.forEach((middleware: any) => {
          router.use(api.route, middleware);
        });
      } else {
        router.use(api.route, api.middleware);
      }
    }
  });
}

export interface ApiObject {
  middleware: any;
  route: String;
  method: String;
  callback: Function;
}

export const formatApiUrl = (url: String) => {
  url = removeAllLeadingSlashes(url);
  return `${API}/${url}`;
};
