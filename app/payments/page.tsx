import PaymentForm from './PaymentForm';
interface SearchParams {
  service?: string;
  category?: string;
}

export default async function PaymentPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const serviceTitle = searchParams?.service ? decodeURIComponent(searchParams.service) : '';
  const serviceCategory = searchParams?.category || '';

  return <PaymentForm initialService={serviceTitle} initialCategory={serviceCategory} />;
}