export interface Comic {
  title: string;
  description: string;
  pageCount: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: [{ name: string }];
  };
}
