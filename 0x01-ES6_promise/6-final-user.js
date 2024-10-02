import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((result) => (
      result.map((x) => ({
        status: x.status,
        value: x.status === 'fulfilled' ? x.value : String(x.reason),
      }))
    ));
}
