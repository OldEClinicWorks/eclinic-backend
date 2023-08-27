import { API } from "./config";
export function removeAllLeadingSlashes(inputString: String): String {
  let startIndex = 0;
  while (startIndex < inputString.length && inputString[startIndex] === "/") {
    startIndex++;
  }

  return inputString.substring(startIndex);
}
export const formatApiUrl = (url: String) => {
  url = removeAllLeadingSlashes(url);
  return `${API}/${url}`;
};
