import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
export const shazamApi = createApi({
        reducerPath:'shazamApi',
        baseQuery: fetchBaseQuery({
          baseUrl: 'https://shazam-api7.p.rapidapi.com/',
          prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','6fbfd87af0mshb3142521d12d07ep1a8d36jsn143c9ed05c6f')
            return headers;
          }
        }),
        endpoints: (builder)=>({
          getTopCharts: builder.query({query: ()=>'/charts/get-top-songs-in-world?limit=50'}),
        })
    });

  export const{
    useGetTopChartsQuery
  }=shazamApi;