import getData from "./getData.js";

const getDataArray = async ()=>{
  const allData = [];
  const limit = 30;
  for (let i = 1; i <= limit; i++){
    const character =  await getData(i);
    allData.push(character);
  }
  return allData;
};

export default getDataArray;