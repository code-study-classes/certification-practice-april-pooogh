// task 1
const getNameAndRating = (str) => {
  const [name, company, plmar, appst] = str.split(';').slice(0, 4);
  const rating = parseFloat(plmar, 10) + parseFloat(appst, 10);
  return [name, company, rating];
};

const getIndia = (str) => parseInt(str.split(';')[6], 10);

const tableParsing = (content) => {
  /* eslint-disable */
  let [head, ...tableParsed] = content.trim().split('\n'); // \n - перенос строки
  const step1 = tableParsed.reduce((acc, app) => {
    const [name, company, rating] = getNameAndRating(app);
    const [nameAcc, companyAcc, ratingAcc] = acc;
    return rating > ratingAcc ? getNameAndRating(app) : acc;
  }, ['', '', 0]);
  console.log(`General top messenger: ${step1[0]}, Owner: ${step1[1]}`);

  const indiaDownloads = tableParsed.map((item) => getIndia(item));
  console.log(indiaDownloads.sort());
  console.log(`Download count: Max count: ${Math.max(...indiaDownloads)}, Min count: ${Math.min(...indiaDownloads)}`);
};

// task 2
const candidateAssessment = (/* content */) => {
};

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };
