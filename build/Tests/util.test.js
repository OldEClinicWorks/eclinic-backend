import { removeAllLeadingSlashes, formatApiUrl } from "../util"; // Update the path accordingly
import { API } from "../config";
describe("removeAllLeadingSlashes", () => {
    test("removes single leading slash", () => {
        const input = "/example";
        const result = removeAllLeadingSlashes(input);
        expect(result).toBe("example");
    });
    test("handles input with no leading slashes", () => {
        const input = "example";
        const result = removeAllLeadingSlashes(input);
        expect(result).toBe("example");
    });
    test("handles input with multiple leading slashes", () => {
        const input = "///example";
        const result = removeAllLeadingSlashes(input);
        expect(result).toBe("example");
    });
});
describe("formatApiUrl", () => {
    test("formats URL correctly", () => {
        const input = "/some-path";
        const result = formatApiUrl(input);
        expect(result).toBe(`${API}/some-path`);
    });
    test("handles input with no leading slashes", () => {
        const input = "some-path";
        const result = formatApiUrl(input);
        expect(result).toBe(`${API}/some-path`);
    });
    test("handles input with multiple leading slashes", () => {
        const input = "///some-path";
        const result = formatApiUrl(input);
        expect(result).toBe(`${API}/some-path`);
    });
});
