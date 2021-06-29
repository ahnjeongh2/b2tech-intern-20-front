import { useMemo } from 'react';
import TableForm from '../../../components/TableForm';

function TableContentsCommute({ userInput }) {
  const columns = useMemo(
    () => [
      {
        Header: '기본 정보',
        columns: [
          {
            Header: '일자',
            accessor: 'date',
          },
          {
            Header: '사번',
            accessor: 'employee_number',
          },
          {
            Header: '이름',
            accessor: 'name',
          },
          {
            Header: '부서명',
            accessor: 'roles.부서',
          },
          {
            Header: '직급',
            accessor: 'roles.직책',
          },
        ],
      },
      {
        Header: '출퇴근 정보',
        columns: [
          {
            Header: '출근시간',
            accessor: 'work_in',
          },
          {
            Header: '퇴근시간',
            accessor: 'work_out',
          },
          {
            Header: '출근구분',
            accessor: 'late_status',
          },
          {
            Header: '퇴근구분',
            accessor: 'leaving_status',
          },
          {
            Header: '연장근무시간',
            accessor: 'leaving_time',
          },
          {
            Header: '총 근무시간',
            accessor: 'work_time',
          },
        ],
      },
    ],
    []
  );

  const commuteData = useMemo(() => userInput, [userInput]);

  return <TableForm columns={columns} data={commuteData} />;
}

export default TableContentsCommute;
