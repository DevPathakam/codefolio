'use client';

import { usePortfolioStore } from '@/stores/portfolioStore';
import { FakeFile } from '@/types/portfolio';
import { getFileExtension, getFileIcon } from '@/utils/commonHelper';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface ExplorerAccordianProps {
  header: ReactNode | string;
  descendants: FakeFile[];
}
export const ExplorerAccordian = ({
  header,
  descendants,
}: ExplorerAccordianProps) => {
  const [showDescendants, setShowDescendants] = useState(true);

  const activateFile = usePortfolioStore((state) => state.addActiveFile);

  return (
    <div>
      <button
        className="hover:bg-brand-primary-highlight hover:cursor-pointer w-full text-start"
        onClick={() => setShowDescendants((prev) => !prev)}
      >
        {showDescendants ? '📂' : '📁'} {header}
      </button>
      {showDescendants && (
        <div className="flex flex-col pl-4">
          {descendants.map((descendant, idx) => (
            <Link
              key={`explorer-descendant-page-${idx}`}
              href={descendant.href}
              className="hover:bg-brand-primary-highlight flex gap-2"
              onClick={() => activateFile(descendant)}
            >
              <Icon icon={getFileIcon(descendant.type)} className="text-sm" />
              <span className="text-sm">
                {descendant.fileName}.{getFileExtension(descendant.type)}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
