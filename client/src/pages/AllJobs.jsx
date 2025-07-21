import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

// Context must be created at the top level
const AllJobsContext = createContext();

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get('/jobs', {
      params,
    });

    return {
      data,
      searchValues: params,
    };
  } catch (error) {
    // Optionally handle errors here or allow upstream error handling
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Component must also be declared at the top level
const AllJobs = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

// Hook to access context
export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;






// import { JobsContainer, SearchContainer } from '../components';
// import customFetch from '../utils/customFetch';
// import { useLoaderData } from 'react-router-dom';
// import { useContext, createContext } from 'react';

// export const loader = async ({ request }) => {
//   try {
//     const params = Object.fromEntries([
//       ...new URL(request.url).searchParams.entries(),
//     ]);

//     const { data } = await customFetch.get('/jobs', {
//       params,
//     });


// const AllJobsContext = createContext();

// const AllJobs = () => {
//   const { data, searchValues } = useLoaderData();

//   return (
//      <AllJobsContext.Provider value={{ data, searchValues }}>
//       <SearchContainer />
//       <JobsContainer />
//     </AllJobsContext.Provider>
//   );
// };

// export const useAllJobsContext = () => useContext(AllJobsContext);

// export default AllJobs;