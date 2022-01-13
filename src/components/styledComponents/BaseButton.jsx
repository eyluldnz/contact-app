import styled from 'styled-components';
import { baseCss,padding } from './baseCss';

const BaseButton = styled.button`

background-color: ${props=>props.theme.buttonColor};

font-size:16px;
${padding};
  &:hover {
   color:${props=>props.theme.hoverColor};
}
`

export { BaseButton }