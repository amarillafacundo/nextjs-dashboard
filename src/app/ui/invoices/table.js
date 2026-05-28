import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from './buttons';
import { fetchFilteredInvoices } from '../../lib/data';

export default async function InvoicesTable({ query, currentPage }) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div key={invoice.id} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={invoice.image_url}
                      className="rounded-full"
                      width={28}
                      height={28}
                      alt={`${invoice.name}'s profile picture`}
                    />
                    <p className="font-medium">{invoice.name}</p>
                  </div>
                  <p className="text-sm text-gray-500">{invoice.email}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <p className="text-xl font-medium">{invoice.amount}</p>
                  <p>{invoice.date}</p>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                    invoice.status === 'paid'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {invoice.status}
                  </span>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th className="px-4 py-5 font-medium sm:pl-6">Customer</th>
                <th className="px-3 py-5 font-medium">Email</th>
                <th className="px-3 py-5 font-medium">Amount</th>
                <th className="px-3 py-5 font-medium">Date</th>
                <th className="px-3 py-5 font-medium">Status</th>
                <th className="relative py-3 pl-6 pr-3"><span className="sr-only">Edit</span></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr key={invoice.id} className="w-full border-b py-3 text-sm last-of-type:border-none">
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{invoice.email}</td>
                  <td className="whitespace-nowrap px-3 py-3">{invoice.amount}</td>
                  <td className="whitespace-nowrap px-3 py-3">{invoice.date}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      invoice.status === 'paid'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}