import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((upload) => createUser().then((result) => {
      console.log(`${upload.body} ${result.firstName} ${result.lastName}`);
    }))
    .catch(() => {
      console.log('Signup system offline');
    });
}
