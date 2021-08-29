const querystring = (data: Record<string, string>) => {
  let query = '?';
  for (const [key, value] of Object.entries(data)) {
    query += key + '=' + value + '&';
  }
  return query.slice(0, -1);
};

export default querystring;
