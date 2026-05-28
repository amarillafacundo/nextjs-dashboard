'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position = 'middle';
          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';

          return (
            <PaginationNumber
              key={`${page}-${index}`}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({ page, href, isActive, position }) {
  const className = [
    'flex h-10 w-10 items-center justify-center text-sm border',
    position === 'first' || position === 'single' ? 'rounded-l-md' : '',
    position === 'last' || position === 'single' ? 'rounded-r-md' : '',
    isActive ? 'z-10 bg-blue-600 border-blue-600 text-white' : 'hover:bg-gray-100',
    page === '...' ? 'pointer-events-none' : '',
  ].join(' ');

  return isActive || page === '...' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>{page}</Link>
  );
}

function PaginationArrow({ href, direction, isDisabled }) {
  const className = [
    'flex h-10 w-10 items-center justify-center rounded-md border',
    isDisabled ? 'pointer-events-none text-gray-300' : 'hover:bg-gray-100',
    direction === 'left' ? 'mr-2 md:mr-4' : 'ml-2 md:ml-4',
  ].join(' ');

  const icon = direction === 'left'
    ? <ArrowLeftIcon className="w-4" />
    : <ArrowRightIcon className="w-4" />;

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className}>{icon}</Link>
  );
}

function generatePagination(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
}