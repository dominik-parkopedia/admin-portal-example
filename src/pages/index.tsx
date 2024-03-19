import { api } from "~/utils/api";

export default function Home() {
  const listPaymentsQuery = api.payments.listPayments.useQuery();

  return (
    <div className="py-10">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Payments
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {listPaymentsQuery.isLoading ? (
            "Loading"
          ) : (
            <>
              {JSON.stringify(listPaymentsQuery.data?.payments ?? [], null, 2)}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
