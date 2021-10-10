const Post = require("../../model/post");

const createPost = async (req, res) => {
  const { author, title, content, authorID } = req.body;

  if (!author || !authorID)
    return res.json({ message: "Something Wrong! Relogin" });

  const post = new Post({
    author: author,
    title: title,
    content: content,
    userID: authorID,
  });

  try {
    await post.save();

    res.json({
      message: "Blog Posted Successfully",
      ok: true,
      post: post,
    });
  } catch (e) {
    res.json({
      message: e.message,
      ok: false,
    });
  }
};

// !getall blogs for one user

const getAllSingleUserPosts = async (req, res) => {
  const { userID } = req.body;

  if (!userID)
    return res.json({
      message: "Invalid Access.Kindly Relogin",
      ok: false,
    });

  const posts = await Post.find({ userID: userID });

  if (!posts)
    return res.json({
      message: "You are Not Posted Yet!",
      ok: false,
    });

  return res.json({
    posts: posts,
    message: "Success",
    ok: true,
  });
};

// ! delete Post

const deletePost = async (req, res) => {
  const { id } = req.body;
  if (!id)
    return res.json({
      message: "Something Went Wrong",
      ok: false,
    });

  const blog = await Post.findOneAndDelete({ _id: id });

  return res.json({
    ok: true,
    message: "Successfull Deleted",
  });
};

//  ! Get one post // single

const getSignlePost = async (req, res) => {
  const { id } = req.body;

  if (!id)
    return res.json({
      message: "Something Went Wrong",
      ok: false,
    });

  const blog = await Post.findOne({ _id: id });

  return res.json({
    message: "Success",
    ok: true,
  });
};

// !get Public Posts

const GetPublicPosts = async (req, res) => {
  const allBlogs = await Post.find().sort({ created_at: 1 });

  return res.json({
    ok: true,
    message: "All public posts are getted ",
  });
};

const CRUD = {
  createPost,
  getAllSingleUserPosts,
  deletePost,
  GetPublicPosts,
  getSignlePost,
};

module.exports = CRUD;
