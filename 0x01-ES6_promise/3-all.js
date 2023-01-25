import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  createUser().then((result) => {
    uploadPhoto().then((photo) => {
      console.log(`${photo.body} ${
        result.firstName} ${
        result.lastName}`);
    });
  });
}
export default handleProfileSignup;
