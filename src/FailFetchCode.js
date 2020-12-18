async function getMovieDataFromOMDB() {
  const request = new Request(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      Content_Type: 'application/json',
    }),
  });
  const response = await fetch(request);
  const data = await response.json();
  console.log('OMDBdata', data);
}

useEffect(() => {
  getMovieDataFromOMDB();
}, []);
