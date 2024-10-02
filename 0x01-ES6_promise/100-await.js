import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};

  const photo = await uploadPhoto();
  const user = await createUser();
  result = { photo, user };
  return result;
}
