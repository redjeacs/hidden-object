function Dropdown({ coords, objects }) {
  const handleObjectClick = async () => {
    console.log("clicked");
  };
  return <form onSubmit={handleObjectClick}></form>;
}

export default Dropdown;
