import dynamic from 'next/dynamic';

const PageComponent = dynamic(
  () => import('@/client/pages/Login').then(lib => lib.default) as any,
  { ssr: false },
);

const Index = () => {
  return <PageComponent />;
};

export default Index;
