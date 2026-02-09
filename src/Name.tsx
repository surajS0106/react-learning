export const Name = (props: { name: string, alias: string, lastName: string}) => {
  console.log(props.name);
  return (
    
    <div id="container">
      <h2>Hi, This is {props.name} ({props.alias}) {props.lastName} </h2>
    </div>
  );
};
