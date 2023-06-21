import fetchData, { rehydrateDatabaseEndpoint } from "./fetchData";

const withRehydrateDatabaseAsync = (callback: (...args: any[]) => any) => {
  return async () => {
    const rehydrationStatus = await fetchData(rehydrateDatabaseEndpoint);

    if (rehydrationStatus.error) {
      throw new Error("database rehydration failed");
    }

    await callback();
  };
};

export default withRehydrateDatabaseAsync;
