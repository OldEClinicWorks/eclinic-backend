import { API } from "./config";
export function removeAllLeadingSlashes(inputString) {
    let startIndex = 0;
    while (startIndex < inputString.length && inputString[startIndex] === "/") {
        startIndex++;
    }
    return inputString.substring(startIndex);
}
export const formatApiUrl = (url) => {
    url = removeAllLeadingSlashes(url);
    return `${API}/${url}`;
};
