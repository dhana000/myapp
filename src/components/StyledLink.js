import { Link } from "react-router-dom";
import styled from "styled-components";

const SLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.onBackground};
`;

function StyledLink({ children, ...props }) {
  return <SLink {...props}>{children}</SLink>;
}

export default StyledLink;
