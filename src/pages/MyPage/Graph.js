import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const GraphDiv = styled.div`
  margin-left: 50px;
`;

const data = {
  labels: ['월', '화', '수', '목', '금', '토', '일'],
  datasets: [
    {
      label: '일별 근로시간',
      data: [9, 9.5, 10, 9, 9, 0, 2],
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

export default function Graph() {
  return (
    <GraphDiv>
      <Bar
        width={500}
        data={data}
        // legend={legend}
        options={options}
      />{' '}
    </GraphDiv>
  );
}
