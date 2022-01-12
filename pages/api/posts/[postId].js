import data from "../../../postData"


export default function handler(req, res) {
    const {postId} = req.query
    const post = data.find((post) => post.id === parseInt(postId))
    res.status(200).json(post)
}