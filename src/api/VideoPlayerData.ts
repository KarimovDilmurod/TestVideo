const videoList = [
  {
    id: '1',
    title: 'Fotbool',
    image: require('../assets/image/futbol.jpeg'),
    video: require('../assets/video/futbol.mp4'),
  },
  {
    id: '2',
    title: 'Muslim',
    image: require('../assets/image/musl.webp'),
    video: require('../assets/video/video.mp4'),
  },
  {
    id: '3',
    title: 'Music',
    image: require('../assets/image/music.jpeg'),
    video: require('../assets/video/m2.mp4'),
  },
];
export default videoList;

export interface IVideoData {
  id: string;
  title: string;
  image: any;
  video: any;
}
