export const Table = (data) => {
  console.log(data)
    return (
      <div className='table__block'>
      <>
        {data.data.map((el) => {
          return (
            <table>
            <thead>
              <tr>
                <th>{el.title}</th>
                <th>Количество</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{el.answers[0].title}</td>
                <td className='znach'>{el.answers[0].count}</td>
              </tr>
              <tr>
                <td>{el.answers[1].title}</td>
                <td className='znach'>{el.answers[1].count}</td>
              </tr>
              <tr>
                <td>{el.answers[2].title}</td>
                <td className='znach'>{el.answers[2].count}</td>
              </tr>
            </tbody>
          </table>
          );
        })}
      </>
      </div>
  );
};

export default Table;


