import { useEffect, useState} from 'react';
import axios from 'axios';
import axiosData from './AxiosData';
import { INEWS } from '../components/CardNews';

const useFetchData= (section:string) => {
  const [data, setData] = useState<INEWS[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(axiosData+section);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;