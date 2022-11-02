import React from "react";
import { useWeb3Transfer } from "react-moralis";

export default function TransferUSDC(ammountinWEI, receiver) {
  const { fetch, error, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.Token(ammountinWEI, 18),
    receiver: receiver,
    type: "erc20",
    contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  });

  return (
    // Use your custom error component to show errors
    <div>
      {error && <ErrorMessage error={error} />}
      <button onClick={() => fetch()} disabled={isFetching}>
        Transfer
      </button>
    </div>
  );
}
