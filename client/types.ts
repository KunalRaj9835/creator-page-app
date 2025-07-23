export interface Creator {
  _id: string;
  name: string;
  category: string;
  followers: string;
  bio: string;
  image: string;
  social?: {
    instagram?: string;
    youtube?: string;
  };
}
