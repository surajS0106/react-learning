export const Name = ({ name, alias, lastName}:{ name: string, alias: string, lastName: string}) => {
  console.log(name);
  return (
    
    <div id="container">
      <h2>Hi, This is {name} ({alias}) {lastName} </h2>
    </div>
  );
};
