import { FC } from 'react'
import { Text, View } from 'react-native'
import { TInvoiceStatusState } from '../../../../common/state/invoices-status.slice'

export const Invoice: FC<Props> = ({ id, customerName, date, total, status }) => {
  return (
    <View>
      <View>
        <Text>{id}</Text>
        <Text>{customerName}</Text>
      </View>
      <View>
        <View>
          <Text>{date}</Text>
          <Text>$ {total}</Text>
        </View>
        <View>
          <Text>{status}</Text>
        </View>
      </View>
    </View>
  )
}

type Props = {
  id: string
  customerName: string
  date: Date
  total: number
  status: TInvoiceStatusState
}
