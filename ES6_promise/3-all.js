/* global console */

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      console.log(responses); // Fixed
    })
    .catch((error) => {
      console.log(error); // Fixed
    });
}
