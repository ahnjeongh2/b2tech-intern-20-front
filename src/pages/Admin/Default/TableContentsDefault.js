import { useMemo, useState, useEffect } from 'react';
import TableForm from '../../../components/TableForm';

function TableContentsDefault() {
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
          {
            Header: '주민번호',
            accessor: 'resident_registration_number',
          },
          {
            Header: '연락처',
            accessor: 'mobile_phone_number',
          },
          {
            Header: '주소',
            accessor: 'address',
          },
          {
            Header: '입사일',
            accessor: 'entering_date',
          },
        ],
      },
    ],
    []
  );

  const defaultData = useMemo(() => employeeData, [employeeData]);

  return <TableForm columns={columns} data={defaultData} />;
}

export default TableContentsDefault;
