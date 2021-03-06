import { useEffect, useState } from "react";
import { getTransactions } from "../../services";
import { Transaction } from "../../services/TransactionService";
import { Container } from "./styles";
export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function handleSetTransactions(transactions: [Transaction]) {
    setTransactions(transactions);
  }

  async function handleGetTransactions() {
    const response = await getTransactions();
    if (response.data) return handleSetTransactions(response.data);
  }

  useEffect(() => {
    handleGetTransactions();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Quantia</th>
            <th>Categoria</th>
            <th>Tipo</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Software</td>
            <td className="deposit">R$ 20.000,00</td>
            <td>Desenvolvimento</td>
            <td>Entrada</td>
            <td>02/01/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Software</td>
            <td className="withdraw">- R$ 20.000,00</td>
            <td>Desenvolvimento</td>
            <td>Saída</td>
            <td>02/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
