import { MaterialReactTable } from 'material-react-table';
import React, { useMemo } from 'react';
import  {data}  from '../../utils/constants';

export const Example = () => {
    const columns = useMemo(
        () => [
          {
            accessorKey: 'one',
            header: 'Вопрос 1',
          },
          {
            accessorKey: 'two',
            header: 'Вопрос 2',
          },
          {
            accessorKey: 'three',
            header: 'Вопрос 3',
          },
          {
            accessorKey: 'four',
            header: 'Вопрос 4',
          },
        ],
        [],
        );
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      rowNumberMode="static"
      muiTableBodyRowProps={{ hover: true }}
      muiTableProps={{
        sx: {
          border: '1px solid black',
          width: '30%',
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          border: '1px solid black',
          width: '150px',
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          border: '1px solid black',
          width: '150px',   
        },
      }}
    />
  );
};

export default Example;