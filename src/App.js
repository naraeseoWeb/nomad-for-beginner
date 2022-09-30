import { useEffect, useState } from 'react';

function App() {
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    fetch(
      ` http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.xml`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return <div>{loading ? <h2>Loading...</h2> : null}</div>;
}

export default App;
