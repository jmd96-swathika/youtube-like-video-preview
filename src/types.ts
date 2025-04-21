interface YoutubeVideo {
    id: number;
    title: string;
    thumbnailUrl: string;
    duration: number;
    uploadTime: string;
    views: number;
    author: string;
    videoUrl: string;
    description: string;
    subscriber: string;
    isLive: boolean;
}

export default YoutubeVideo;