const Navigation = () => {
  return (
    <section
      id="hello"
      className="w-fit bg-[#bb5387] h-[100vh] top-[3.76rem] pl-10 right-0 pr-[2vw] absolute z-50"
    >
      <ul className="text-right mt-[5vh] text-xl flex flex-col gap-[5vh]">
        <li>Home</li>
        <li>Wiki</li>
      </ul>

      <div className="absolute left-[-1.5rem] top-0 h-full right-0 w-[1.5rem] bg-gradient-to-l from-[#622c47] to-transparent"></div>
    </section>
  );
};

export default Navigation;
