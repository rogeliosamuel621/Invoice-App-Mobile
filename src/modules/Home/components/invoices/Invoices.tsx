import { Text, View } from 'react-native'
import { useFetchInvoices } from '../../hooks/useFetchInvoices'
import { Invoice } from './Invoice'

export const Invoices = () => {
  const { invoices, isLoading } = useFetchInvoices()

  if (isLoading) return <Text>Loading</Text>

  if (!invoices?.length) return <Text>No Info</Text>

  return (
    <View>
      {invoices.map((invoice) => (
        <Invoice
          customerName={invoice.customer.name}
          date={invoice.date}
          id={invoice.id}
          status={invoice.status}
          total={invoice.total}
          key={invoice.id}
        />
      ))}
    </View>
  )
}
