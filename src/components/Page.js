import Pagination from 'react-bootstrap/Pagination'

const Page = ({ data, page, setPage }) => {
  
  const nextPage = () => {
    if (data.length === 10) {
      setPage(page+1)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page-1)
    }
  }

  return (
    <Pagination className='w-100 justify-content-center mt-3'>
      {
        page === 1 ?
          <Pagination.Prev onClick={prevPage} disabled /> :
          <Pagination.Prev onClick={prevPage} />
      }
      <Pagination.Item disabled>{page}</Pagination.Item>
      {
        data.length === 10 ?
          <Pagination.Next onClick={nextPage} /> :
          <Pagination.Next onClick={nextPage} disabled />
      }
    </Pagination>
  )
}

export default Page