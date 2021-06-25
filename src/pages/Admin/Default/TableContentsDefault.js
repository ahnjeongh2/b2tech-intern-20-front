import { useMemo, useState, useEffect } from 'react';
import TableForm from '../../../components/TableForm';
import { useHistory } from 'react-router-dom';
import { GET_API } from '../../../config';

function TableContentsDefault() {
  const [employeeData, setEmployeeData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [employeeData]);

  async function fetchData() {
    let response = await fetch(`${GET_API}/schedules`);
    if (response.ok) {
      let data = await response.json();
      setEmployeeData(data.schedules);
    } else if (response.status == 401) {
      history.push(`/`);
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
