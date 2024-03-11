type TSearch = {
  searched_data: TSearchedData;
};

type TSearchedData = {
  songs: TSong[];
  artists: TArtist[];
};

export type TSong = {
  id: number;
  api_path: string;
  name: string;
  artist_name: string;
  image_thumbnail: string;
};

export type TArtist = {
  id: number;
  api_path: string;
  name: string;
  image_thumbnail: string;
};

export default TSearch;
