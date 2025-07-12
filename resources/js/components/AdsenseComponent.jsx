import { useEffect } from 'react';

const AdsenseComponent = ({
  adSlot,
  adFormat = 'auto',
  adLayout,
  fullWidthResponsive = true,
  style = { display: 'block' },
  adClient = 'ca-pub-2068612253576714',
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, [adSlot]);

  return (
    <div style={{ margin: '2rem 0' }}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-full-width-responsive={fullWidthResponsive.toString()}
      ></ins>
    </div>
  );
};

export default AdsenseComponent;