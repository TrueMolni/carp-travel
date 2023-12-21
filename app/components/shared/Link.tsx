import Link from "next/link";
import { UrlObject } from "url";

type LinkProps = {
  ref: UrlObject;
  text: String;
  customClass: String;
};

const LinkBtn = ({ ref, text, customClass }: LinkProps) => {
  const linkClass = "";

  return (
    <Link
      className={!customClass ? linkClass : linkClass + " " + customClass}
      href={ref}
    >
      {text}
    </Link>
  );
};

export default LinkBtn;
