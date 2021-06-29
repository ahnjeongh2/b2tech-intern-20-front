import { useMemo, useState, useEffect } from 'react';
import TableForm from '../../../components/TableForm';
import { useHistory } from 'react-router-dom';
import { GET_API } from '../../../config';

function TableContentsCommute({ userInfo }) {
  const [employeeData, setEmployeeData] = useState([]);
  const [admin, setAdmin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [employeeData]);

  async function fetchData() {
    const accessToken = localStorage.getItem('AUTHORIZATION');
    let response = await fetch(`${GET_API}/schedules`, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: accessToken,
      },
    });
    if (response.ok) {
      let data = await response.json();
      setEmployeeData(data.schedules);
    }
    // else if (response.status == 401) {
    //   history.push(`/`);
    // } else if (!response.status == 401) setAdmin(true);
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
            accessor: 'work_in',
          },
          {
            Header: '퇴근시간',
            accessor: 'work_out',
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
