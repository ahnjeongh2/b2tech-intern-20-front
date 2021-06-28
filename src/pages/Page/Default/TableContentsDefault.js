import { useMemo, useState, useEffect } from 'react';
import TableForm from '../../../components/TableForm';
import { useHistory } from 'react-router-dom';
import { GET_API } from '../../../config';

function TableContentsDefault({ userInfo }) {
  const [employeeData, setEmployeeData] = useState([]);
  const [admin, setAdmin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [employeeData]);

  async function fetchData() {
    const accessToken = localStorage.getItem('AUTHORIZATION');
    let response = await fetch(
      `${GET_API}/users/${userInfo.employee_number}/employees`,
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
    if (response.ok) {
      let data = await response.json();
      setEmployeeData(data.results);
    } else if (response.status == 401) {
      history.push(`/`);
    } else if (!response.status == 401) setAdmin(true);
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
            accessor: 'registration_number',
          },
          {
            Header: '연락처',
            accessor: 'phone_number',
          },
          {
            Header: '입사일',
            accessor: 'date_of_join',
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
