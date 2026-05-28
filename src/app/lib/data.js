import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

export async function fetchRevenue() {
  const data = await sql`SELECT * FROM revenue`;
  return data;
}

export async function fetchLatestInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    ORDER BY invoices.date DESC
    LIMIT 5
  `;
  return data;
}

export async function fetchCardData() {
  const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
  const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
  const invoiceStatusPromise = sql`
    SELECT
      SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS paid,
      SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS pending
    FROM invoices
  `;

  const data = await Promise.all([
    invoiceCountPromise,
    customerCountPromise,
    invoiceStatusPromise,
  ]);

  const numberOfInvoices = Number(data[0][0].count ?? '0');
  const numberOfCustomers = Number(data[1][0].count ?? '0');
  const totalPaidInvoices = data[2][0].paid ?? '0';
  const totalPendingInvoices = data[2][0].pending ?? '0';

  return { numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices };
}

export async function fetchCustomers() {
  const data = await sql`SELECT * FROM customers`;
  return data;
}

