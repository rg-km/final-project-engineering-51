import create from 'zustand'
import produce from 'immer'
import axios from 'axios'

let auth = localStorage.getItem("token");
const useStore = create(set => ({
  soal: [],
  answers: [
    { no_soal: 1, answer: null },
    { no_soal: 2, answer: null },
    { no_soal: 3, answer: null },
    { no_soal: 4, answer: null },
    { no_soal: 5, answer: null },
    { no_soal: 6, answer: null },
    { no_soal: 7, answer: null },
    { no_soal: 8, answer: null },
    { no_soal: 9, answer: null },
    { no_soal: 10, answer: null },
  
    { no_soal: 11, answer: null },
    { no_soal: 12, answer: null },
    { no_soal: 13, answer: null },
    { no_soal: 14, answer: null },
    { no_soal: 15, answer: null },
    { no_soal: 16, answer: null },
    { no_soal: 17, answer: null },
    { no_soal: 18, answer: null },
    { no_soal: 19, answer: null },
    { no_soal: 20, answer: null },
  
    { no_soal: 21, answer: null },
    { no_soal: 22, answer: null },
    { no_soal: 23, answer: null },
    { no_soal: 24, answer: null },
    { no_soal: 25, answer: null },
    { no_soal: 26, answer: null },
    { no_soal: 27, answer: null },
    { no_soal: 28, answer: null },
    { no_soal: 29, answer: null },
    { no_soal: 30, answer: null },
  
    { no_soal: 31, answer: null },
    { no_soal: 32, answer: null },
    { no_soal: 33, answer: null },
    { no_soal: 34, answer: null },
    { no_soal: 35, answer: null },
    { no_soal: 36, answer: null },
    { no_soal: 37, answer: null },
    { no_soal: 38, answer: null },
    { no_soal: 39, answer: null },
    { no_soal: 40, answer: null },
  
    { no_soal: 41, answer: null },
    { no_soal: 42, answer: null },
    { no_soal: 43, answer: null },
    { no_soal: 44, answer: null },
    { no_soal: 45, answer: null },
    { no_soal: 46, answer: null },
    { no_soal: 47, answer: null },
    { no_soal: 48, answer: null },
    { no_soal: 49, answer: null },
    { no_soal: 50, answer: null },
  
    { no_soal: 51, answer: null },
    { no_soal: 52, answer: null },
    { no_soal: 53, answer: null },
    { no_soal: 54, answer: null },
    { no_soal: 55, answer: null },
    { no_soal: 56, answer: null },
    { no_soal: 57, answer: null },
    { no_soal: 58, answer: null },
    { no_soal: 59, answer: null },
    { no_soal: 60, answer: null }
  ],
  progress: 0,
  setProgress: () => 
    set((state) => ({ 
      progress: state.progress < 10 ? (state.progress + 1) : (state.progress + 0)
    })),
  resetProgress: () => 
    set((state) => ({
      progress: 0
    })),
  setAnswers: (value) => 
    set(
      produce((draft) => {
        const answerIndex = draft.answers.find((el) => el.no_soal === value.no_soal);
        answerIndex.answer = value.answer;
      })
    ),
  getSoal: async () => {
    try{
      const response = await axios.get('http://localhost:8080/api/test/soal?page=1',{
        headers:{
          Accept: "/",
          "Content-Type": "application/json",
          "Token" : auth,
        },
      })
      set({soal: response.data.soal})
    } catch(e) {
      console.log(e);
    }
  },
  getSoal2: async () => {
    try{
      const response = await axios.get('http://localhost:8080/api/test/soal?page=2',{
        headers:{
          Accept: "/",
          "Content-Type": "application/json",
          "Token" : auth,
        },
      })
      set({soal: response.data.soal})
    } catch(e) {
      console.log(e);
    }
  },
  getSoal3: async () => {
    try{
      const response = await axios.get('http://localhost:8080/api/test/soal?page=3',{
        headers:{
          Accept: "/",
          "Content-Type": "application/json",
          "Token" : auth,
        },
      })
      set({soal: response.data.soal})
    } catch(e) {
      console.log(e);
    }
  },
  getSoal4: async () => {
    try{
      const response = await axios.get('http://localhost:8080/api/test/soal?page=4',{
        headers:{
          Accept: "/",
          "Content-Type": "application/json",
          "Token" : auth,
        },
      })
      set({soal: response.data.soal})
    } catch(e) {
      console.log(e);
    }
  },
  getSoal5: async () => {
    try{
      const response = await axios.get('http://localhost:8080/api/test/soal?page=5',{
        headers:{
          Accept: "/",
          "Content-Type": "application/json",
          "Token" : auth,
        },
      })
      set({soal: response.data.soal})
    } catch(e) {
      console.log(e);
    }
  },
  getSoal6: async () => {
    try{
      const response = await axios.get('http://localhost:8080/api/test/soal?page=6',{
        headers:{
          Accept: "/",
          "Content-Type": "application/json",
          "Token" : auth,
        },
      })
      set({soal: response.data.soal})
    } catch(e) {
      console.log(e);
    }
  },
}));

export default useStore;