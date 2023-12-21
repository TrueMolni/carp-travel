import Link from "next/link";

type LinkProps = {
  textref: String;
  text: String;
  customClass?: String;
};

const LinkBtn = ({ textref, text, customClass }: LinkProps) => {
  const linkClass = "text-accent-500 text-lg leading-[22px] tracking-[1.8px]";

  return (
    <Link
      className={!customClass ? linkClass : linkClass + " " + customClass}
      href={`/${textref}`}
    >
      {text}
    </Link>
  );
};

export default LinkBtn;
/*
About


letter-spacing: 1.8px;
*/
