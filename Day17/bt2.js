const comments = [
  {
    id: 1,
    user: "An",
    content: "Sản phẩm rất tốt!",
    rating: 5,
    verified: true,
    likes: 12,
  },
  { id: 2, user: "", content: "ok", rating: 3, verified: false, likes: 0 },
  {
    id: 3,
    user: "Bình",
    content: "Mua lần 2 rồi, vẫn chất lượng",
    rating: 4,
    verified: true,
    likes: 8,
  },
  {
    id: 4,
    user: "Chi",
    content: "   ",
    rating: null,
    verified: false,
    likes: 2,
  },
  {
    id: 5,
    user: "Duy",
    content: "Giao hàng nhanh, đóng gói cẩn thận, sẽ ủng hộ tiếp!",
    rating: 5,
    verified: true,
    likes: 20,
  },
  {
    id: 6,
    user: null,
    content: "Tệ quá",
    rating: 1,
    verified: false,
    likes: 0,
  },
  {
    id: 7,
    user: "Em",
    content: "Bình thường",
    rating: 3,
    verified: true,
    likes: 1,
  },
];

// Ham 1
function isValidComment(comment) {
  return Boolean(
    comment.user &&
    comment.user.trim() &&
    comment.content &&
    comment.content.trim().length >= 5 &&
    comment.rating >= 1 &&
    comment.rating <= 5,
  );
}

console.log(isValidComment(comments[0]));
console.log(isValidComment(comments[1]));
console.log(isValidComment(comments[3]));
console.log(isValidComment(comments[5]));

// ham 2
function filterValidComments(comments) {
  const result = [];

  for (let i = 0; i < comments.length; i++) {
    if (isValidComment(comments[i])) {
      result.push(comments[i]);
    }
  }

  return result;
}

console.log(filterValidComments(comments));

// ham 3
function getCommentStats(validComments) {
  let tongLike = 0;
  let tongXepHang = 0;
  let binhluan = 0;
  let topComment = validComments[0];
  for (const comment of validComments) {
    tongLike += comment.likes;
    tongXepHang += comment.rating;
  }
  for (const comment of validComments) {
    if (comment.verified) {
      binhluan++;
    }
    if (comment.likes > topComment.likes) {
      topComment = comment;
    }
  }
  return {
    total: validComments.length,
    averageRating: Number((tongXepHang / validComments.length).toFixed(1)),
    tongLike,
    binhluan,
    topComment,
  };
}

console.log(getCommentStats(filterValidComments(comments)));
// Ham 4
function formatComment(comment) {
  let stars = "⭐".repeat(comment.rating);
  let user = comment.user || "Ẩn danh";

  if (comment.verified) {
    user += " ✓";
  }

  return (
    stars + " | " + user + " | " + comment.content + " | 👍 " + comment.likes
  );
}

console.log(formatComment(comments[0]));
console.log(formatComment(comments[2]));
