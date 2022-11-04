import React from "react";
import { useWeb3Transfer } from "react-moralis";

export default function TransferUSDC(ammountinWEI, receiver) {
  const { fetch, error, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.Token(ammountinWEI, 18),
    receiver: receiver,
    type: "erc20",
    contractAddress: "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747",
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
