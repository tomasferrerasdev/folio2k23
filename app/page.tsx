import { Nav } from './components/nav';

interface Props {
  searchParams: {
    country: string;
    city: string;
  };
}

export default function Home({ searchParams }: Props) {
  const { city } = searchParams;

  return (
    <main className="h-screen w-full text-white text-3xl bg-[url('/images/bg.png')]">
      <Nav city={city} />
    </main>
  );
}
