export interface IConversation {
  id: string;
  title: string;
  messages: IConevrsationMessage[];
}

export interface IConevrsationMessage {
  from: string;
  to: string;
  createdOn: Date;
  content: string;
}

export interface IGuruAvatar {
  id: string;
  name: string;
  image: string;
  description: string;
  conversations: IConversation[];
  focused: boolean;
}
