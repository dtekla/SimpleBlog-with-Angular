
export interface Comment {
  postId: number | undefined;
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  body: string;
}

export interface NewComment extends Comment{
  terms: string;
}
