const getUserCredentials = () => {
  return {
    id: localStorage.getItem('userId'),
    name: localStorage.getItem('name'),
  };
};

export default getUserCredentials;
