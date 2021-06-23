import { ReactNode, VFC } from "react";
import { useHistory } from "react-router-dom";

type Props = {
  to: string,
  children: ReactNode,
};

const PageLink: VFC<Props> = (props: Props) => {
  let history = useHistory();
  const handleClick = () => history.push(props.to);

  return (
    <button onClick={handleClick}>{props.children}</button>
  )
}

export default PageLink;
