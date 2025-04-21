import { useEffect, useState } from "react";
import getYoutubeVideos from "../services/YoutubeVideoServices";
import YoutubeVideo from "../types";
import YoutubeVideoCard from "./YoutubeVideoCard";
import logo from '../assets/planlogo.svg';
import loadingGif from '../assets/loading.gif';

const YoutubeVideoList = () => {
    const [youtubeVideos, setYoutubeVideos] = useState<YoutubeVideo[]>([]);
    const [query, setQuery] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState<'interactive' | 'static'>('interactive');

    useEffect(() => {
        const url = query.length >= 3 ? `/api/videos/search?q=${query}` : "/api/videos";
        setLoading(true);
        setError('');

        // Get the videos from the API and setting it to the state
        getYoutubeVideos<YoutubeVideo[]>(url)
            .then((data) => {
                if (data) {
                    setYoutubeVideos(data);
                    setLoading(false);
                } else {
                    setError("Error while fetching");
                    setLoading(false);
                }
            })
            .catch(err => {
                setError("Error fetching videos.")
                setLoading(false);
            });
    }, [query]);

    const handleSwitch = (e: { target: { checked: any } }) => {
        setMode(e.target.checked ? 'interactive' : 'static');
    };

    return (
        <div className="p-20">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>
                <div className="d-flex">
                    <p className="mode">{mode}</p>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={mode === 'interactive'}
                            onChange={handleSwitch}
                        />
                        <span className="slider round"></span>
                    </label>
                    <div className="search-videos">
                        <input
                            type="text"
                            value={query}
                            placeholder="Search videos"
                            onChange={e => setQuery(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>
            </div>
            {
                loading &&
                <div className="loading-container">
                    <img src={loadingGif} alt="Loading..." className="loading-gif" />
                </div>
            }
            {
                error &&
                <p className="title">{error}</p>
            }
            <div className="youtube-video-grid">
                {
                    youtubeVideos.map(youtubeVideo => (
                        <YoutubeVideoCard
                            key={youtubeVideo.id}
                            video={youtubeVideo}
                            mode={mode}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default YoutubeVideoList