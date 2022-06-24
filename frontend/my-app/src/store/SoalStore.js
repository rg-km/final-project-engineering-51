import create from 'zustand'
import axios from 'axios'

const SoalStore = create(set => ({
  soal: [],
  getSoal: async () => {
    try{
      const response = await axios.get('localhost:8080/api/test/soal?page=1')
      set({soal: response.data})
    } catch(e) {
      console.log(e);
    }
  }
}))

export default SoalStore;