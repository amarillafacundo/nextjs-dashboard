import Image from 'next/image';
import { lusitana } from './fonts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className="text-3xl font-bold mb-6">
        Next.js Dashboard Tutorial
      </h1>

      <p
        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal mb-8`}
      >
        <strong>Welcome to Acme.</strong> This is the example for the{' '}
        <a
          href="https://nextjs.org/learn/"
          className="text-blue-500"
        >
          Next.js Learn Course
        </a>
        .
      </p>

      <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />

        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Dashboard desktop version"
        />

        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Dashboard mobile version"
        />

      </div>
    </main>
  );
}