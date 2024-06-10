export function buildUrl(baseUrl , ordering, date) {
  let url = baseUrl;
  if (ordering) {
    url += `&ordering=${ordering}`;
  }
  if (date) {
    url += `&dates=${date}`;
  }
  return url;
}
