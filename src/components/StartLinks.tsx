import { Icon } from "@iconify/react";
import Link from "next/link";

const startLinks = [
  {
    label: "View Skills",
    icon: "mdi:code",
    href: "/skills",
  },
  {
    label: "Open Projects",
    icon: "material-symbols:folder-outline",
    href: "/projects",
  },
];
export const StartLinks = () => (
  <div className="my-5">
    <h2 className="text-lg md:text-xl">Start</h2>
    <ul className="text-blue-300 text-sm my-1">
      {startLinks.map((link, idx) => (
        <li key={`start-link-${idx}`}>
          <Link
            href={link.href}
            className="flex hover:text-blue-100 hover:underline"
          >
            <span className="mt-1 mr-2">
              <Icon icon={link.icon} />
            </span>
            <span>{link.label}...</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
