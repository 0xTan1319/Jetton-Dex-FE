import fakerPoolsJSON from '../../utils/constants/faker/fakerPools.json';

export const timeout = time =>
  new Promise(resolve => setTimeout(resolve, time));

const getPoolsFakerApi = async ({ totalPools = 0 }) => {
  const poolsCounter = totalPools + 10;
  const fakerPoolsLoaded = Object.values(fakerPoolsJSON);
  const fakerPools = fakerPoolsLoaded.slice(0, poolsCounter);
  await timeout(1000);
  return { data: fakerPools };
};

export default getPoolsFakerApi;
