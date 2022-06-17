import _ from "lodash";

export function paginate(items, pageSize, currentPage) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  return _.slice(items, startIndex, endIndex);
}
