import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const GraphDiv = styled.div`
  margin-left: 50px;
`;

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export default function Graph({ value }) {
  const [workTime, setWorkTime] = useState([]);

  const workTimeList = value => {
    if (!value) {
      return;
    }
    const result = value.map(el => {
      return Number(el.replace(':', '.'));
    });
    setWorkTime(result);
  };

  useEffect(() => {
    workTimeList(value);
  }, []);

  const data = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: '일별 근로시간',
        data: workTime,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <GraphDiv>
      <Bar
        width={500}
        data={data}
        // legend={legend}
        // options={options}
      />
    </GraphDiv>
  );
}
