import { useEffect } from 'react';

const AdsenseComponent = ({ adSlot, adFormat = "auto", adClient = "ca-pub-2068612253576714", style = { display: 'block' } }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <div style={{ margin: '2rem 0' }}>
      <ins className="adsbygoogle"
        style={style}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdsenseComponent;