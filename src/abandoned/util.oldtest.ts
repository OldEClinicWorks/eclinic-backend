import {
  removeAllLeadingSlashes,
  assignApiRoutes,
  formatApiUrl,
  ApiObject,
  GET,
  POST,
  API,
} from "../util"; // Update with the correct file path

describe("removeAllLeadingSlashes", () => {
  test("removes single leading slash", () => {
    const result = removeAllLeadingSlashes("/example/path");
    expect(result).toBe("example/path");
  });

  test("removes multiple leading slashes", () => {
    const result = removeAllLeadingSlashes("/////another/example");
    expect(result).toBe("another/example");
  });
});

describe("formatApiUrl", () => {
  test("formats API URL correctly", () => {
    const result = formatApiUrl("/example/path");
    expect(result).toBe(`${API}/example/path`);
  });
});

describe("assignApiRoutes", () => {
  // Mocked Express app and router objects
  const mockApp = {
    get: jest.fn(),
    post: jest.fn(),
  };

  const mockRouter = {
    use: jest.fn(),
  };

  // Example API routes and middleware
  const api_routes = [
    {
      route: "/route1",
      method: "get",
      callback: jest.fn(),
    },
    {
      route: "/route2",
      method: "post",
      callback: jest.fn(),
    },
    {
      route: "/route3",
      method: "get",
      middleware: jest.fn(),
    },
    {
      route: "/route4",
      method: "post",
      middleware: [jest.fn(), jest.fn()],
    },
  ];

  beforeEach(() => {
    // Clear mock function calls before each test
    mockApp.get.mockClear();
    mockApp.post.mockClear();
    mockRouter.use.mockClear();
  });

  it("should assign GET routes and middleware correctly", () => {
    assignApiRoutes(mockApp, mockRouter, api_routes);

    expect(mockApp.get).toHaveBeenCalledTimes(2); // Two GET routes
    expect(mockApp.get).toHaveBeenCalledWith(
      "/api/route1",
      expect.any(Function)
    );
    expect(mockApp.get).toHaveBeenCalledWith(
      "/api/route3",
      expect.any(Function)
    );

    expect(mockRouter.use).toHaveBeenCalledTimes(1); // One middleware
    expect(mockRouter.use).toHaveBeenCalledWith(
      "/api/route3",
      expect.any(Function)
    );
  });

  it("should assign POST routes and middleware correctly", () => {
    assignApiRoutes(mockApp, mockRouter, api_routes);

    expect(mockApp.post).toHaveBeenCalledTimes(2); // Two POST routes
    expect(mockApp.post).toHaveBeenCalledWith(
      "/api/route2",
      expect.any(Function)
    );
    expect(mockApp.post).toHaveBeenCalledWith(
      "/api/route4",
      expect.any(Function)
    );

    expect(mockRouter.use).toHaveBeenCalledTimes(2); // Two middlewares
    expect(mockRouter.use).toHaveBeenCalledWith(
      "/api/route4",
      expect.any(Function)
    );
    expect(mockRouter.use).toHaveBeenCalledWith(
      "/api/route4",
      expect.any(Function)
    );
  });
});
