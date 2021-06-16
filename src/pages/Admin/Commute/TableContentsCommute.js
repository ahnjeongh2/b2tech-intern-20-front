import { useMemo, useState, useEffect } from 'react';
import TableForm from '../components/TableForm';

function TableContentsCommute() {
  const [employeeData, setEmployeeData] = useState('');
  let scheduleData = [];

  useEffect(() => {
    fetchData();
    console.log(employeeData);
  }, []);

  useEffect(() => {
    console.log(employeeData);
  }, [employeeData]);

  async function fetchData() {
    let response = await fetch(`http://13.125.76.153:8000/schedules`);
    if (response.ok) {
      let data = await response.json();

      console.log(data);
      console.log(employeeData);

      // scheduleData = data.schedules;
      setEmployeeData(data.schedules);
      console.log(scheduleData);
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
            Header: '사번',
            accessor: 'employee_number',
          },
          {
            Header: '이름',
            accessor: 'name',
          },
          {
            Header: '부서명',
            accessor: 'role[1].부서',
          },
          {
            Header: '직급',
            accessor: 'position',
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

  const commuteData = useMemo(() => employeeData, []);
  console.log(employeeData);

  return <TableForm columns={columns} data={commuteData} />;
}

export default TableContentsCommute;
