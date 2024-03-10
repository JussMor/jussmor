/* eslint-disable */

// @ts-nocheck
import type { QueryGenqlSelection, Query } from './schema'
import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  type FieldsSelection,
  type GraphqlOperation,
  type ClientOptions,
  GenqlError,
} from './runtime'
export type { FieldsSelection } from './runtime'
export { GenqlError }

import types from './types'
export * from './schema'
const typeMap = linkTypeMap(types as any)

export interface Client {
  query<R extends QueryGenqlSelection>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>
}

const createClient = function (options?: ClientOptions): Client {
  const { url, headers } = getStuffFromEnv(options)
  return createClientOriginal({
    url: url.toString(),

    ...options,
    headers: { ...options?.headers, ...headers },
    queryRoot: typeMap.Query!,
    mutationRoot: typeMap.Mutation!,
    subscriptionRoot: typeMap.Subscription!,
  }) as any
}

export const everything = {
  __scalar: true,
}

export type QueryResult<fields extends QueryGenqlSelection> = FieldsSelection<
  Query,
  fields
>
export const generateQueryOp: (
  fields: QueryGenqlSelection & { __name?: string },
) => GraphqlOperation = function (fields) {
  return generateGraphqlOperation('query', typeMap.Query!, fields as any)
}


export const getStuffFromEnv = (options) => {
    const parsedDebugForcedURL = process.env.BASEHUB_DEBUG_FORCED_URL;
    const parsedBackwardsCompatURL = process.env.BASEHUB_URL;

    const backwardsCompatURL = parsedBackwardsCompatURL
      ? new URL(parsedBackwardsCompatURL)
      : undefined;


    const basehubUrl = new URL(
      parsedDebugForcedURL
        ? parsedDebugForcedURL
        : `https://api.basehub.com/graphql`
    );

    // These params can either come disambiguated, or in the URL.
    // Params that come from the URL take precedence.

    const parsedBasehubTokenEnv = process.env.BASEHUB_TOKEN || "bshb_pk_ra919smqrsehro5a9vuf8b87pg6rpel39ed8zg03bkqa15n6zjm4oopvfir7zv5g";
    const parsedBasehubRefEnv = process.env.BASEHUB_REF;
    const parsedBasehubDraftEnv = process.env.BASEHUB_DRAFT;

    const token =
      options?.token ?? basehubUrl.searchParams.get("token") ??
      (parsedBasehubTokenEnv ? parsedBasehubTokenEnv : undefined) ??
      (backwardsCompatURL
        ? backwardsCompatURL.searchParams.get("token")
        : undefined) ??
      null;

    if (!token) {
      throw new Error(
        "Token not found. Make sure to include the BASEHUB_TOKEN env var."
      );
    }

    const ref =
      basehubUrl.searchParams.get("ref") ??
      (parsedBasehubRefEnv ? parsedBasehubRefEnv : undefined) ??
      (backwardsCompatURL
        ? backwardsCompatURL.searchParams.get("ref")
        : undefined) ??
      null;

    let draft =
       basehubUrl.searchParams.get("draft") ??
      (parsedBasehubDraftEnv ? parsedBasehubDraftEnv : undefined) ??
      (backwardsCompatURL
        ? backwardsCompatURL.searchParams.get("draft")
        : undefined) ??
      null;

    if (options?.draft) {
      draft = "true";
    }

    // 2. let's validate the URL

    if (basehubUrl.pathname.split("/")[1] !== "graphql") {
        throw new Error(`Invalid URL. The URL needs to point your repo's GraphQL endpoint, so the pathname should end with /graphql`);
    }

    // we'll pass these via headers
    basehubUrl.searchParams.delete("token");
    basehubUrl.searchParams.delete("ref");
    basehubUrl.searchParams.delete("draft");

    // 3. done.

    return {
      url: basehubUrl,
      headers: {
        "x-basehub-token": token,
        ...(ref ? { "x-basehub-ref": ref } : {}),
        ...(draft ? { "x-basehub-draft": draft } : {}),
      },
    };
};


export * from "@basehub/mutation-api-helpers";
import { createFetcher } from "./runtime";

// we limit options to only the ones we want to expose.
type Options = Omit<ClientOptions, 'url' | 'method' | 'batch' | 'credentials' | 'fetch' | 'fetcher' | 'headers' | 'integrity' | 'keepalive' | 'mode' | 'redirect' | 'referrer' | 'referrerPolicy' | 'window'> & { draft?: boolean, token?: string }

/**
 * Create a basehub client.
 *
 * @param options (optional) Options for the `fetch` request; for example in Next.js, you can do `{ next: { revalidate: 60 } }` to tweak your app's cache.
 * @returns A basehub client.
 *
 * @example
 * import { basehub } from 'basehub'
 *
 * const firstQuery = await basehub().query({
 *   __typename: true,
 * });
 *
 * console.log(firstQuery.__typename) // => 'Query'
 *
 */
export const basehub = (options?: Options) => {
  const { url, headers } = getStuffFromEnv(options);

  return {
    ...createClient(options),
    raw: createFetcher({ ...options, url, headers }) as <Cast = unknown>(
      gql: GraphqlOperation
    ) => Promise<Cast>,
  };
};
