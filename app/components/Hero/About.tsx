export const About = () => {
  return (
    <div className="px-[16px] md:px-[50px] pb-6 w-full justify-end flex flex-col items-end absolute z-10 bottom-0 ">
      <div className="text-xl max-w-[552px] text-right">
        <p>
          tomasferreras:~ a $ ./frontend developer mainly focused on React,
          Next.js, Node.js, PostgreSQL and MongoDB.
        </p>
        <p>Currently learning Three.js, WebGL,</p>
        <p>
          Happily working at{' '}
          <a
            href="https://tuxdi.com/"
            target="_blank"
            aria-label="Visit Tuxdi website"
            className="underline-offset-8 underline"
          >
            @tuxdi
          </a>
        </p>
      </div>
    </div>
  );
};
