import { useMemo, useState, useEffect } from 'react';
import TableForm from '../../../components/TableForm';

function TableContentsCommute() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [employeeData]);

  async function fetchData() {
    let response = await fetch(`http://192.168.0.53:8000/schedules`);
    if (response.ok) {
      let data = await response.json();

      setEmployeeData(data.schedules);
    } else {
      alert(`HTTP-Error: ${response.status}`);
    }
  }

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
            accessor: 'created_at',
          },
          {
            Header: '퇴근시간',
            accessor: 'updated_at',
          },
          {
            Header: '출근구분',
            accessor: 'attendanceType',
          },
          {
            Header: '퇴근구분',
            accessor: 'leavingWorkType',
          },
          {
            Header: '연장근무시간',
            accessor: 'leaveing_time',
          },
          {
            Header: '휴일근무시간',
            accessor: 'holidayWorkTime',
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

  const commuteData = useMemo(() => employeeData, [employeeData]);

  return <TableForm columns={columns} data={commuteData} />;
}

export default TableContentsCommute;
