// const mongoose = require('mongoose');

// const entrySchema = new mongoose.Schema({
//   grinNo: {
//     type: String,
//     required: true,
//   },
//   grinDate: {
//     type: Date,
//     required: true,
//   },
//   gsn: {
//     type: String,
//     required: true,
//   },
//   gsnDate: {
//     type: Date,
//     required: true,
//   },
//   poNo: {
//     type: String,
//     required: true,
//   },
//   poDate: {
//     type: Date,
//     required: true,
//   },
//   partyName: {
//     type: String,
//     required: true,
//   },
//   innoviceno: {
//     type: String,
//     required: true,
//   },
//   innoviceDate: {
//     type: Date,
//     required: true,
//   },
//   receivedFrom: {
//     type: String,
//     required: true,
//   },
//   lrNo: {
//     type: String,
//     required: true,
//   },
//   lrDate: {
//     type: Date,
//     required: true,
//   },
//   transName: {
//     type: String,
//     required: true,
//   },
//   vehicleNo: {
//     type: String,
//     required: true,
//   },
//   file: {
//     type: String, // File will be stored as a path or URL in MongoDB
//     required: true,
//   },
//   PurchaseManagerSigned: {
//     type: Boolean,
//     default: false,

//   },
//   StoreManagerSigned: {
//     type: Boolean,
//     default: false,

//   },
//   GeneralManagerSigned: {
//     type: Boolean,
//     default: false,

//   },
//   AccountManagerSigned:
//   {
//     type: Boolean,
//     default: false
//   }, materialInfo: { // Added materialInfo field
//     type: String,
//     required: true,
//   }
// }, { timestamps: true }); // Automatically adds createdAt and updatedAt fields


// const Entries = mongoose.model('Entries', entrySchema);

// module.exports = Entries;





const mongoose = require('mongoose');

// Schema for each table row
const tableDataSchema = new mongoose.Schema({
  item: {
    type: String,
    
  },
  description: {
    type: String,
   
  },
  quantityNo: {
    type: Number,
   
  },
  quantityKg: {
    type: Number,
   
  },
}, { _id: false }); // _id is set to false to prevent nested IDs for each row

const entrySchema = new mongoose.Schema({
  grinNo: {
    type: String,
    required: true,
  },
  grinDate: {
    type: Date,
    required: true,
  },
  gsn: {
    type: String,
    required: true,
  },
  gsnDate: {
    type: Date,
    required: true,
  },
  poNo: {
    type: String,
    required: true,
  },
  poDate: {
    type: Date,
    required: true,
  },
  partyName: {
    type: String,
    required: true,
  },
  innoviceno: {
    type: String,
    required: true,
  },
  innoviceDate: {
    type: Date,
    required: true,
  },
  lrNo: {
    type: String,
    required: true,
  },
  lrDate: {
    type: Date,
    required: true,
  },
  transName: {
    type: String,
    required: true,
  },
  vehicleNo: {
    type: String,
    required: true,
  },
  file: {
    type: String, // File path or URL
    required: true,
  },
  PurchaseManagerSigned: {
    type: Boolean,
    default: false,
  },
  isHidden: { 
    type: Boolean, 
    default: false 
  },
  createdBy:{
    type:String
  },
  StoreManagerSigned: {
    type: Boolean,
    default: false,
  },
  GeneralManagerSigned: {
    type: Boolean,
    default: false,
  },
  AccountManagerSigned: {
    type: Boolean,
    default: false,
  },
  // materialInfo: {
  //   type: String,
  //   required: true,
  // },
  tableData: [tableDataSchema], // Array of tableData objects
}, { timestamps: true });

const Entries = mongoose.model('Entries', entrySchema);

module.exports = Entries;
