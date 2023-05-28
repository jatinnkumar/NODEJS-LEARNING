const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/jatindata")
    .then(() => console.log("connection successfull....."))
    .catch((err) => console.log(err));

// A Mongoose schema defines the structure of the document,
// default values, validators, etc...
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    video: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// CREATING DATA

// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

// create document or insert
const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "React Js",
            ctype: "Front End",
            video: 40,
            author: "Jatin",
            active: true,
        });

        const expressPlaylist = new Playlist({
            name: "Express Js",
            ctype: "Back End",
            video: 40,
            author: "Jatin",
            active: true,
        });

        const mongodbPlaylist = new Playlist({
            name: "Mongo Db",
            ctype: "Database",
            video: 40,
            author: "Jatin",
            active: true,
        });
        // const result = await reactPlaylist.save();
        const result = await Playlist.insertMany([reactPlaylist, expressPlaylist, mongodbPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// createDocument(); 



// READING DATA 

const getDocument = async () => {
    // const result = await Playlist.find({ ctype: "Front End" }).select({ name: 1, _id: 0 });

    // get data using "$or" operator
    // const result = await Playlist.find({ $or: [{ ctype: "Back End" }, { author: "Jatin" }] });

    // get data using "$and" operator
    // const result = await Playlist.find({ $and: [{ ctype: "Back End" }, { author: "Jatin" }] });

    // counting and sorting data
    // const result = await Playlist.find({ $and: [{ ctype: "Back End" }, { author: "Jatin" }] }).countDocuments();

    // sorting data in assending order
    // const result = await Playlist.find({ $and: [{ ctype: "Back End" }, { author: "Jatin" }] }).select({ name: 1, _id: 0 }).sort({ name: 1 }); 

    // sorting data in descending order
    const result = await Playlist.find({ $and: [{ ctype: "Back End" }, { author: "Jatin" }] }).select({ name: 1, _id: 0 }).sort({ name: -1 });
    console.log(result);
}

// getDocument();

// UPDATE DATA

const updateDocument = async (_id) => {
    // const result = await Playlist.updateOne({ _id }, {
    // Or
    const result = await Playlist.findByIdAndUpdate({ _id }, {
        $set: {
            name: "Python"
        }
    });

    console.log(result);
}

// updateDocument("63e9210f251091b528022357");

// DELETE DATA

const deleteDocument = async (_id) => {
    // const result = await Playlist.deleteOne({ _id });
    // Or
    const result = await Playlist.findByIdAndDelete({ _id });
    console.log(result);
}

deleteDocument("63ea5d31aef3969cfb051c22");