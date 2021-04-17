import mongoose from 'mongoose'

//Schema SETUP
var swimmerSchema = new mongoose.Schema({
  _id: String,
  firstName: String,
  lastName: String,
  middleName: String,
  preferredName: String,
  image: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  bio: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zipcode: Int,
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  mobileNumber: String,
  homeNumber: String,
  gender: String,
  affiliations: [
    {
      type: mongoose.SChema.Types.ObjectId,//some sort of object like
      ref: "Team",
      isCurrent: Bool
    }
  ],
  height: {
    value: Float,
    metric: String
  },
  weight: {
    value: Float,
    metric: String
  },
  bestPerformances: {

    _25Fly: [
      {
        time: String,
        poolSize: String
      }
    ],
    _50Fly: [
      {
        time: String,
        poolSize: String
      }
    ]

  }

});
