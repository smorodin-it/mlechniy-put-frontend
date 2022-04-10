import { css } from 'styled-components';
import { Property } from 'csstype';

export interface CustomizableFlexLayoutProps {
  direction?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
}

const CustomizableFlexLayout = css<CustomizableFlexLayoutProps>`
  display: flex;
  flex-direction: ${(props) => props.direction ?? 'row'};
  justify-content: ${(props) => props.justifyContent ?? 'initial'};
  align-items: ${(props) => props.alignItems ?? 'initial'};
`;

export default CustomizableFlexLayout;
