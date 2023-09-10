import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectElem value={value} onChange={onChange} style={{ '--width': displayedValue.length * 10 + 'px' }}>
        {children}
      </SelectElem>
      <IconWrapper><Icon id='chevron-down' size={16} strokeWidth={2}></Icon></IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  width: fit-content;
  `

const SelectElem = styled.select`
  appearance: none;
  background: transparent;
  color: ${COLORS.gray700};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  border: none;
  width: var(--width);
  padding-right: 16px;
`

const IconWrapper = styled.span`
  position: absolute;
  padding: 2px 0;
`

export default Select;
