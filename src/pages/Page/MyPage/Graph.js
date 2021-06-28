import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import styled from 'styled-components';

const GraphDiv = styled.div`
  margin: 20px 0 0 50px;

  canvas {
    @media ${({ theme }) => theme.mobile} {
      width: 300px !important;
      height: 100px !important;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    margin: 15px;
  }
`;

const options = {
  responsive: false,
  scales: {
    y: {
      stacked: true,
      beginAtZero: true,
      max: 12,
    },
  },
};

const workInOptions = {
  responsive: false,
  scales: {
    y: {
      stacked: true,
      beginAtZero: true,
      max: 11,
      min: 7,
    },
  },
};

const workOutOptions = {
  responsive: false,
  scales: {
    y: {
      stacked: true,
      beginAtZero: true,
      max: 20,
      min: 12,
    },
  },
};

export default function Graph({ workTime }) {
  const data = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: '일별 근로시간',
        data: [9, 9, 9, 9, 9],
        stack: 'Stack 0',
        backgroundColor: [
          // 'rgba(255, 99, 132, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
          // 'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          // 'rgb(255, 99, 132)',
          // 'rgb(255, 159, 64)',
          // 'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          // 'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
          // 'rgb(201, 203, 207)',
        ],
        borderWidth: 0.5,
      },
      {
        label: '초과 근무시간',
        // data: workTime,
        data: [1, 0, 0.5, 2, 0, 4.5, 3],
        stack: 'Stack 0',
        backgroundColor: [
          // 'rgba(255, 99, 132, 0.8)',
          // 'rgba(255, 159, 64, 0.8)',
          // 'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          // 'rgba(54, 162, 235, 0.8)',
          // 'rgba(153, 102, 255, 0.8)',
          // 'rgba(201, 203, 207, 0.8)',
        ],
        borderColor: [
          // 'rgb(255, 99, 132)',
          // 'rgb(255, 159, 64)',
          // 'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          // 'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
          // 'rgb(201, 203, 207)',
        ],
        borderWidth: 0.5,
      },
    ],
  };

  const workIn = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: '일별 출근시간',
        data: [8.3, 8.2, 8.4, 8.5, 8.3, 10, 10],
        stack: 'Stack 0',
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(201, 203, 207, 1)',
        ],
        borderWidth: 1,
        borderColor: 'rgb(201, 203, 207)',
      },
    ],
  };

  const workOut = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: '일별 퇴근시간',
        data: [18, 17, 17.5, 19, 17, 14.5, 13],
        stack: 'Stack 0',
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(201, 203, 207, 1)',
        ],
        borderWidth: 1,
        borderColor: 'rgb(201, 203, 207)',
      },
    ],
  };

  return (
    <GraphDiv>
      {workTime && (
        <>
          <Bar
            width={500}
            data={data}
            // legend={legend}
            options={options}
          />
          <Line
            width={500}
            data={workIn}
            // legend={legend}
            options={workInOptions}
          />
          <Line
            width={500}
            data={workOut}
            // legend={legend}
            options={workOutOptions}
          />
        </>
      )}
    </GraphDiv>
  );
}
