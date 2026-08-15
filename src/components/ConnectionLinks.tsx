import { SocialLinks } from "@/constants/portfolio";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const ConnectionLinks = () => {
  return (
    <div className="my-5">
      <h2 className="text-lg md:text-xl">Connect</h2>
      <ul className="text-blue-300 text-sm my-1">
        {SocialLinks.map((file, idx) => (
          <li key={`recently-opened-${idx}`}>
            <Link
              href={file.href}
              className="flex hover:text-blue-100 hover:underline"
            >
              <span className="mt-1 mr-2">
                <Icon icon={file.icon ?? ""} />
              </span>
              <span>{file.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
