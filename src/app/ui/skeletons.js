export function CardSkeleton() {
  return (
    <div className="rounded-xl bg-gray-100 p-2 shadow-sm animate-pulse">
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className="w-full md:col-span-4 animate-pulse">
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="h-[350px] rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className="flex w-full flex-col md:col-span-4 animate-pulse">
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`flex flex-row items-center justify-between py-4 ${i !== 0 ? 'border-t' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200" />
                <div className="space-y-1">
                  <div className="h-4 w-24 rounded-md bg-gray-200" />
                  <div className="h-3 w-32 rounded-md bg-gray-200" />
                </div>
              </div>
              <div className="h-4 w-12 rounded-md bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100 animate-pulse" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardsSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}


export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root animate-pulse">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                    <div className="h-4 w-24 rounded-md bg-gray-200" />
                  </div>
                  <div className="h-4 w-16 rounded-md bg-gray-200" />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="h-4 w-24 rounded-md bg-gray-200" />
                  <div className="h-4 w-16 rounded-md bg-gray-200" />
                  <div className="h-4 w-16 rounded-md bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                {['Customer', 'Email', 'Amount', 'Date', 'Status'].map((h) => (
                  <th key={h} className="px-4 py-5 font-medium sm:pl-6">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {[...Array(6)].map((_, i) => (
                <tr key={i} className="w-full border-b py-3 text-sm">
                  <td className="py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-200" />
                      <div className="h-4 w-24 rounded-md bg-gray-200" />
                    </div>
                  </td>
                  <td className="px-3 py-3"><div className="h-4 w-32 rounded-md bg-gray-200" /></td>
                  <td className="px-3 py-3"><div className="h-4 w-16 rounded-md bg-gray-200" /></td>
                  <td className="px-3 py-3"><div className="h-4 w-16 rounded-md bg-gray-200" /></td>
                  <td className="px-3 py-3"><div className="h-4 w-16 rounded-md bg-gray-200" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}