import React, { useState } from 'react';
import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import Spinner from './Spinner';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamsChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(prevParams => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      <SearchForm params={params} onParamsChange={handleParamsChange} />
      {loading && <Spinner />}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />;
      })}
    </Container>
  );
}

export default App;
