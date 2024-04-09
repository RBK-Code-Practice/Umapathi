import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getInventory: build.query<GetInventoryApiResponse, GetInventoryApiArg>({
      query: () => ({ url: `/store/inventory` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as petApi };
export type GetInventoryApiResponse = /** status 200 successful operation */ {
  [key: string]: number;
};
export type GetInventoryApiArg = void;
export const { useGetInventoryQuery } = injectedRtkApi;
