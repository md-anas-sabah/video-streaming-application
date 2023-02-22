import CommentsList from "./CommentsList";

export const commentsData = [
  {
    name: "Md Anas Sabah",
    text: "limits the execution of function call ",
    replies: [],
  },
  {
    name: "Md Anas Sabah",
    text: "limits the execution of function call ",
    replies: [],
  },
  {
    name: "Md Anas Sabah",
    text: "limits the execution of function call ",
    replies: [
      {
        name: "Md Anas Sabah",
        text: "limits the execution of function call ",
        replies: [
          {
            name: "Md Anas Sabah",
            text: "limits the execution of function call ",
            replies: [
              {
                name: "Md Anas Sabah",
                text: "limits the execution of function call ",
                replies: [],
              },
            ],
          },
          {
            name: "Md Anas Sabah",
            text: "limits the execution of function call ",
            replies: [],
          },
        ],
      },
      {
        name: "Md Anas Sabah",
        text: "limits the execution of function call ",
        replies: [
          {
            name: "Md Anas Sabah",
            text: "limits the execution of function call ",
            replies: [
              {
                name: "Md Anas Sabah",
                text: "limits the execution of function call ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Md Anas Sabah",
    text: "limits the execution of function call ",
    replies: [],
  },
  {
    name: "Md Anas Sabah",
    text: "limits the execution of function call ",
    replies: [],
  },
  {
    name: "Md Anas Sabah",
    text: "limits the execution of function call ",
    replies: [
      {
        name: "Md Anas Sabah",
        text: "limits the execution of function call ",
        replies: [
          {
            name: "Md Anas Sabah",
            text: "limits the execution of function call ",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentContainer = () => {
  return (
    <div className="ml-6 m-3 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
