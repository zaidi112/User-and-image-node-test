const mongoose  = require("mongoose");


const Imageschema = mongoose.Schema({
    imageurlpublic: "https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?pid=ImgDet&rs=1",
    imageurlprivate:"https://th.bing.com/th/id/OIP.HLuY60jzx5puuKjbqmWRRwHaEK?pid=ImgDet&rs=1"
})

const Image = mongoose.model("Image", Imageschema);
module.exports = Image;
