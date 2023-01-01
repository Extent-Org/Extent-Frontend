/* eslint-disable react-hooks/rules-of-hooks */
import { useAccount, useSigner, useContract, useProvider } from 'wagmi';
import { GetContractArgs } from '@wagmi/core';

const GetAccount = () => {
   const { address, isConnecting, isDisconnected } = useAccount()
  if (isConnecting) return "Connecting..."
  if (isDisconnected) return null
  return address;
}

const GetContract = (address: string, abi: any) => {
  const { data: signerOrProvider, isError, isLoading } = useSigner()
  let contract = null;
  const contractArguments: GetContractArgs = {
    addressOrName: address,
    contractInterface: abi,
    signerOrProvider: signerOrProvider
  }
  if(!isError && !isLoading) {
    contract = useContract(contractArguments)
  }
  return contract;
}

function GetProvider () {
  const provider = useProvider();
  return provider;
}

const GetSigner = () => {
    const {data: signer} = useSigner();
    return signer;
}

module.exports = { GetAccount, GetContract, GetSigner, GetProvider }