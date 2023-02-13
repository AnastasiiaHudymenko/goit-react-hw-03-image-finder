export const Button = props => {
  console.log(props);
  // const handlClickLoadMore = () => {};

  return <button onClick={props.onClick}>Load more</button>;
};
