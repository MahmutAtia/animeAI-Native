import { useState, useEffect ,} from 'react';
import axios from 'axios';

export const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading (true)
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErr(err);
      });
  }, [url]);

  return [data,loading,err]
};
