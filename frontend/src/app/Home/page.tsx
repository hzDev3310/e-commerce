// pages/[yourPage].tsx
import { GetStaticProps } from 'next';
import {get} from '../../api/get'

type DataProps<T> = {
  data: T | null;
};

export const getStaticProps: GetStaticProps<DataProps<any>> = async () => {

  const data = await get<any>("http://localhost:8080/products");

  return {
    props: {
      data,
    },
    revalidate: 10, // revalidate every 10 seconds
  };
};

export default function Page({ data }: DataProps<any>) {
  if (!data) {
    return <div>Error loading data.</div>;
  }

  return (
    <div>
      {/* Render your data here */}
    </div>
  );
}
