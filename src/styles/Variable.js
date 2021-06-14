import { css } from 'styled-components';

export const flexSet = (justify = 'center', align = 'center') => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const BtnSet = (width = '100', height = '80', margin = '5') => css`
  width: ${width}px;
  height: ${height}px;
  margin: ${margin}px;
  background: linear-gradient(315deg, #cfdae0, #f6ffff);
  font-size: 14px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  letter-spacing: 2.5px;
  font-weight: 500;
  transition: all 0.3s ease 0s;
  cursor: pointer;
`;
