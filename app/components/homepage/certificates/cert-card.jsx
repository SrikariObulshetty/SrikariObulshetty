// @flow strict
"use client";

function CertCard({ cert }) {
  // eslint-disable-next-line @next/next/no-img-element
  const imgFallback = '/png/certificate-sample.svg';

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={cert.link}
      className="block rounded-lg overflow-hidden bg-[#0b0f1a] hover:shadow-lg transition-shadow duration-200 border border-transparent hover:border-[#2b2f4a]"
    >
      <div className="relative h-40 w-full bg-[#0f1222]">
        {cert?.badge ? (
          // use simple <img> for both local and external badges; provide an onError fallback
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cert.badge}
            alt={cert.title}
            className="object-cover w-full h-full"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = imgFallback; }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-pink-500" />
        )}
      </div>

      <div className="p-4 text-center">
        <h3 className="text-white text-base font-semibold">{cert.title}</h3>
        <p className="text-sm text-[#bcd4d3] mt-1">{cert.issuer} • {cert.date}</p>
        <div className="mt-3">
          <span className="inline-block px-3 py-1 text-xs bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-full">View Certificate</span>
        </div>
      </div>
    </a>
  );
}

export default CertCard;
