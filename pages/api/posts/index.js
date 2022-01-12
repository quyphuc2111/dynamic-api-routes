import { comment } from 'postcss'
import React from 'react'
import data from "../../../postData"

export default function handler(req, res) {
   if(req.method === "GET") {
       res.status(200).json(data)
   }
//    else if(req.method === "POST") {
//     const post = req.body.post
//     const newPost = {
//         id: Date.now(),
//         text: post,
//     }
//     data.push(newPost)
//     res.status(201).json(newPost)
// }
}
