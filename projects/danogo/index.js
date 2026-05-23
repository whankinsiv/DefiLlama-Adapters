const { trySumTokens } = require('../helper/chain/cardano');
const { fetchURL } = require('../helper/utils');

const DANOGO_GATEWAY_ENDPOINT = 'https://danogo-gateway.tekoapis.com/api/v1'

const fetchSmartContractAddresses = async () => {
  const smartContractResponse = await fetchURL(`${DANOGO_GATEWAY_ENDPOINT}/smartcontract-addresses`);
  return smartContractResponse.data.data.addresses;
}

const tvl = async () => {
  const smartContracts = await fetchSmartContractAddresses();
  return await trySumTokens({ owners: smartContracts })
}

module.exports = {
  timetravel: false,
  cardano: {
    tvl
  },
}
  