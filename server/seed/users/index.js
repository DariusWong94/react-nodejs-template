import User from '../../models/User';
import bluebird from 'bluebird';

export function init() {
  console
  bluebird.coroutine(function* () {
    /**
     * Initializing users
     */
   
    yield User.remove({});

    yield new User({
      _id:"5bbaa392207a04008597aec6",
      username: 'admin',
      password: 'admin',
      passwordConfirmation: 'admin',
      FirstName: 'John',
      LastName: 'Tan',
      roles:'admin',
    }).save();
    yield new User({
      _id:"5bbaa392207a04008597aec9",
      username: 'user1',
      password: 'user123',
      passwordConfirmation: 'user123',
      FirstName: 'Bjorn',
      LastName: 'Tan',
      roles:'user',
    }).save();
    yield new User({
      _id:"5bbaa392207a04008597aecb",
      username: 'user2',
      password: 'user123',
      passwordConfirmation: 'user123',
      FirstName: 'Aloysius',
      LastName: 'Tan',
      roles:'user',
    }).save();
    yield new User({
      _id:"5bbaa392207a04008597aecd",
      username: 'user3',
      password: 'user123',
      passwordConfirmation: 'user123',
      FirstName: 'What',
      LastName: 'Tan',
      roles:'user',
    }).save();
    yield new User({
      _id:"5bbaa392207a04008597aece",
      username: 'user4',
      password: 'user123',
      passwordConfirmation: 'user123',
      FirstName: 'tester',
      LastName: 'Tan',
      roles:'user',
    }).save();
    yield new User({
      _id:"5bbaa392207a04008597aecf",
      username: 'user5',
      password: 'user123',
      passwordConfirmation: 'user123',
      FirstName: 'tester',
      LastName: 'Tan',
      roles:'user',
    }).save();
    yield new User({
      _id:"5bbaa392207a040085976eca",
      username: 'user6',
      password: 'user123',
      passwordConfirmation: 'user123',
      FirstName: 'tester',
      LastName: 'Tan',
      roles:'user',
    }).save();
    console.log("User Seeding completed");

  })().catch((err) => {
    console.log(err);
  });
}
