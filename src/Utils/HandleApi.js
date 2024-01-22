import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_KEY

export const getAllToDo = async (setToDo) => {
    try {
      const response = await axios.get(`${baseUrl}/get`);
      const data = response.data;
      console.log('data -->', data);
      setToDo(data);
    } catch (error) {
      console.error('Error fetching ToDo data:', error);
    }
  };

export const  addToDo = async (text, setText, setToDo) => {
    try {
      const response = await axios.post(`${baseUrl}/save`, {text});
      const data = response.data;
      console.log('data -->', data);
      setText("")
      getAllToDo(setToDo)
    } catch (error) {
      console.error('Error adding ToDo data:', error);
    }
  };

export const  updateToDo = async (toDoId, text, setToDo, setText, setIsupdating) => {
  try {
    const response = await axios.put(`${baseUrl}/update`, {_id: toDoId, text});
    const data = response.data;
    console.log('data -->', data);
    setText("")
    setIsupdating(false)
    getAllToDo(setToDo)
  } catch (error) {
    console.error('Error updating ToDo data:', error);
  }
};

export const  deleteToDo = async (toDoId, setToDo) => {
  try {
    await axios.post(`${baseUrl}/delete`, {_id: toDoId});
    getAllToDo(setToDo)
  } catch (error) {
    console.error('Error updating ToDo data:', error);
  }
};