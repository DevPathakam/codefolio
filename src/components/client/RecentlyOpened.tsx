'use client';

import { usePortfolioStore } from '@/stores/portfolioStore';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export const RecentlyOpened = () => {
  const recentlyOpened = usePortfolioStore((state) => state.openFiles);
  return (
    <div className="my-5">
      <h2 className="text-lg md:text-xl">Recently Opened</h2>
      {recentlyOpened?.length > 0 ? (
        <ul className="text-blue-300 text-sm my-1">
          {recentlyOpened.map((file, idx) => (
            <li key={`recently-opened-${idx}`}>
              <Link
                href={file.href}
                className="flex hover:text-blue-100 hover:underline"
              >
                <span className="mr-2">
                  {file.fileName}.{file.type === 'JSON' ? 'json' : 'md'}
                </span>
                <span className="text-brand-border">~{file.href}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p className="text-brand-border">No files visited recently.</p>
          <p className="text-brand-border text-sm flex">
            Click <Icon icon="ph:sidebar-simple-fill" className="m-1" /> to
            explore.
          </p>
        </div>
      )}
    </div>
  );
};
