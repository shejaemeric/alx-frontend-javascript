import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

async function handleProfileSignup(firstName, lastName, fileName) {
  const promise = signUpUser(firstName, lastName).then(() => {
    uploadPhoto(fileName);
  });
  console.log(promise);
}

export default handleProfileSignup;
