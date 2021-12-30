const getCountries = () =>{

    console.log("Getting Countries...");

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType ="json";

    xhr.onload = () => {
        const countries = xhr.response;
        const countryNames = countries.map((country) => country.name.common);
        const isPop = (populates) => populates.population > 1000000;
        const result = countries.filter(isPop);
        const pnames = result.map((nama)=>nama.name.common);

        // const isEng = (mozhi) => mozhi.languages === Spanish;
        // const result2 = countries.filter(isEng);
        // const snames = result2.map((sna) => sna.name.common);



        // const spanNames = countries.reduce((x) => x.language.English);

        console.log("Full data",countries,countryNames,result,);
        console.log("population more than one crore country list",pnames);
        // console.log("spanish speaking countries",snames);
    }

};
getCountries();