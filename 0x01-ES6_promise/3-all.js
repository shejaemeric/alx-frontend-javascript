import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  createUser()
    .then((data) => {
      uploadPhoto().then((photo) => {
        console.log(`${photo.body} ${data.firstName} ${data.lastName}`);
      });
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}
export default handleProfileSignup;
