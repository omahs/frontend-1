interface Data {
  [key: string]: string;
}

interface TwitterProfile {
  name: string;
  profileImageUrl: string;
  profileUrl: string;
  bio: string;
  followersCount: number;
}

interface TwitterProfileData {
  profile: TwitterProfile[];
  count: number;
}
