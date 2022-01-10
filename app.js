const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log("profileDataArgs", profileDataArgs);

//added to bottom
const printProfileData = profileDataArr => {
    //This ...
    for (let i = 0; i < profileDataArr.length; i += 1){
        console.log('profileDataArr[i]',profileDataArr[i]);
    }

    console.log('================');

    // Is the sames as this...
    profileDataArr.forEach(profileItem => console.log('profileItem', profileItem));
};

printProfileData(profileDataArgs);


